import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'birthday-huyen-trang',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  isBoxOpened: boolean = false;
  isBoxHidden: boolean = false;
  showBirthdayScreen: boolean = false;
  isBackgroundChanged: boolean = false

  constructor() {
  }

  ngOnInit() {
  }

  toggleBox(): void {
    // Ngăn người dùng click lại khi đã mở
    if (this.isBoxOpened) return;

    this.isBoxOpened = true;
    this.isBoxHidden = true;

    // Thêm hiệu ứng chuyển màu nền
    this.isBackgroundChanged = true;

    // Hiệu ứng pháo hoa
    const duration = 99999999 * 1000; // Thời gian pháo hoa
    this.startConfetti(duration);

    this.showBirthdayScreen = true;
  }

  private startConfetti(duration: number): void {
    const animationEnd = Date.now() + duration - 1000;
    const colors = ['#71c6a5', '#e1f0e9'];
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: this.randomInRange(0.1, 0.7), y: Math.random() - 0.2 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: this.randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // (function frame() {
    //   const timeLeft = animationEnd - Date.now();
    //   if (timeLeft <= 0) return;

    //   confetti({
    //     particleCount: 2,
    //     angle: 60,
    //     spread: 55,
    //     origin: { x: 0 },
    //     colors: colors
    //   });

    //   confetti({
    //     particleCount: 2,
    //     angle: 120,
    //     spread: 55,
    //     origin: { x: 1 },
    //     colors: colors
    //   });

    //   if (timeLeft > 0) {
    //     requestAnimationFrame(frame);
    //   }
    // })();
  }

  private randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

}
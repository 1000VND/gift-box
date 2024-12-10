import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'birthday-huyen-trang' },
    { path: 'birthday-huyen-trang', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

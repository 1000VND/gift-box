import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/birthday' },
    { path: 'birthday', component: HomeComponent },
];

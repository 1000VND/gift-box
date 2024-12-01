import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/birthday' },
    { path: 'birthday', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    exports: [RouterModule],
})
export class AppRoutingModule { }

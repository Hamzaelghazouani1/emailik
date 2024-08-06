import { Routes } from '@angular/router';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
    {path:'',component: LandingPageComponent},
    {path:'home',component: HomeComponent},
];

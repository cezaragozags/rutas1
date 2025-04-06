import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'ayuda', component:AyudaComponent},
    {path: 'contact', component:ContactComponent},
    {path: '', component:HomeComponent, pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
];

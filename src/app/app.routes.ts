import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'github', component: GithubComponent },
  // Add more routes as needed
];
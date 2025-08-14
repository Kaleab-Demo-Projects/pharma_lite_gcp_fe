import { Routes } from '@angular/router';
import { authGuard } from '../app/features/auth/auth.guard';
import { App } from './app';


export const routes: Routes = [
  // Public route
  { path: 'login', loadComponent: () => import('./features/login/login').then(m => m.LoginComponent) },

  // Protected “app shell” and all children
  {
    path: '',
    canMatch: [authGuard],               // guard the whole branch
    children: [
      { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard').then(m => m.Dashboard) },
      { path: 'medicines', loadComponent: () => import('./features/medicines').then(m => m.Medicines) },
      { path: 'orders', loadComponent: () => import('./features/orders').then(m => m.Orders) },
    ],
  },

  // (optional) catch‑all
  // { path: '**', redirectTo: '' },
];
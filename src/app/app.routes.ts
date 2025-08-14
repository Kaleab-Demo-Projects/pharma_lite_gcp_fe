import { Routes } from '@angular/router';
import { authGuard } from '../app/features/auth/auth.guard';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', canMatch: [authGuard], loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'login', loadComponent: () => import('./features/login/login').then(m => m.LoginComponent) },
      { path: 'dashboard', canMatch: [authGuard], loadComponent: () => import('./features/dashboard').then(m => m.Dashboard) },
      { path: 'medicines', canMatch: [authGuard], loadComponent: () => import('./features/medicines').then(m => m.Medicines) },
      { path: 'orders', canMatch: [authGuard], loadComponent: () => import('./features/orders').then(m => m.Orders) },
    ],
  }
];
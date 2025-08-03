import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard').then(m => m.Dashboard) },
      { path: 'medicines', loadComponent: () => import('./features/medicines').then(m => m.Medicines) },
      { path: 'orders', loadComponent: () => import('./features/orders').then(m => m.Orders) },
    ],
  }
];
import { Routes } from '@angular/router';
import { AuthGuard } from './app/core/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./app/auth/login/login').then(m => m.Login) },

  {
      path: '',
      loadComponent: () => import('./app/layout/component/app.layout').then(m => m.AppLayout),
      canActivate: [AuthGuard],
      children: [
          { path: 'dashboard', loadComponent: () => import('./app/dashboard/dashboard').then(m => m.Dashboard) },
          { path: 'whatsapp/numbers', loadComponent: () => import('./app/whatsapp/numbers/numbers').then(m => m.Numbers) },
          { path: 'whatsapp/templates', loadComponent: () => import('./app/whatsapp/templates/templates').then(m => m.Templates) },
          { path: 'whatsapp/meta', loadComponent: () => import('./app/whatsapp/meta/meta').then(m => m.Meta) },
          { path: 'campaigns', loadComponent: () => import('./app/campaigns/list/list').then(m => m.List) },
          { path: 'campaigns/manager', loadComponent: () => import('./app/campaigns/manager/manager').then(m => m.Manager) },
          { path: 'campaigns/prospects', loadComponent: () => import('./app/campaigns/prospects/prospects').then(m => m.Prospects) },
          { path: 'clients', loadComponent: () => import('./app/clients/clients').then(m => m.Clients) },
          { path: 'profiles', loadComponent: () => import('./app/profiles/profiles').then(m => m.Profiles) },
      ]
  },

  { path: '**', redirectTo: 'login' }
];

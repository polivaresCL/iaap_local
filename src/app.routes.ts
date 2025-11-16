import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./app/auth/login/login').then(m => m.Login),
  },

  // Dashboard
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./app/dashboard/dashboard').then(m => m.Dashboard),
  },

  // WhatsApp
  {
    path: 'whatsapp/numbers',
    loadComponent: () =>
      import('./app/whatsapp/numbers/numbers').then(m => m.Numbers),
  },
  {
    path: 'whatsapp/templates',
    loadComponent: () =>
      import('./app/whatsapp/templates/templates').then(m => m.Templates),
  },
  {
    path: 'whatsapp/meta',
    loadComponent: () =>
      import('./app/whatsapp/meta/meta').then(m => m.Meta),
  },

  // Campaigns
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./app/campaigns/list/list').then(m => m.List),
  },
  {
    path: 'campaigns/manager',
    loadComponent: () =>
      import('./app/campaigns/manager/manager').then(m => m.Manager),
  },
  {
    path: 'campaigns/prospects',
    loadComponent: () =>
      import('./app/campaigns/prospects/prospects').then(m => m.Prospects),
  },

  // Clients
  {
    path: 'clients',
    loadComponent: () =>
      import('./app/clients/clients').then(m => m.Clients),
  },

  // Profiles
  {
    path: 'profiles',
    loadComponent: () =>
      import('./app/profiles/profiles').then(m => m.Profiles),
  },
];

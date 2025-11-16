import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./app/auth/login/login.component').then(m => m.LoginComponent),
  },

  // Dashboard
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./app/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },

  // WhatsApp
  {
    path: 'whatsapp/numbers',
    loadComponent: () =>
      import('./app/whatsapp/numbers/numbers.component').then(m => m.NumbersComponent),
  },
  {
    path: 'whatsapp/templates',
    loadComponent: () =>
      import('./app/whatsapp/templates/templates.component').then(m => m.TemplatesComponent),
  },
  {
    path: 'whatsapp/meta',
    loadComponent: () =>
      import('./app/whatsapp/meta/meta.component').then(m => m.MetaComponent),
  },

  // Campaigns
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./app/campaigns/list/list.component').then(m => m.ListComponent),
  },
  {
    path: 'campaigns/manager',
    loadComponent: () =>
      import('./app/campaigns/manager/manager.component').then(m => m.ManagerComponent),
  },
  {
    path: 'campaigns/prospects',
    loadComponent: () =>
      import('./app/campaigns/prospects/prospects.component').then(m => m.ProspectsComponent),
  },

  // Clients
  {
    path: 'clients',
    loadComponent: () =>
      import('./app/clients/clients.component').then(m => m.ClientsComponent),
  },

  // Profiles
  {
    path: 'profiles',
    loadComponent: () =>
      import('./app/profiles/profiles.component').then(m => m.ProfilesComponent),
  },
];

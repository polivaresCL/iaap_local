import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },

  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },

  // WhatsApp
  { path: 'whatsapp/numbers', loadComponent: () => import('./whatsapp/numbers/numbers.component').then(m => m.NumbersComponent) },
  { path: 'whatsapp/templates', loadComponent: () => import('./whatsapp/templates/templates.component').then(m => m.TemplatesComponent) },
  { path: 'whatsapp/meta', loadComponent: () => import('./whatsapp/meta/meta.component').then(m => m.MetaComponent) },

  // Campaigns
  { path: 'campaigns', loadComponent: () => import('./campaigns/list/list.component').then(m => m.ListComponent) },
  { path: 'campaigns/manager', loadComponent: () => import('./campaigns/manager/manager.component').then(m => m.ManagerComponent) },
  { path: 'campaigns/prospects', loadComponent: () => import('./campaigns/prospects/prospects.component').then(m => m.ProspectsComponent) },

  // Clients
  { path: 'clients', loadComponent: () => import('./clients/clients.component').then(m => m.ClientsComponent) },

  // Profiles
  { path: 'profiles', loadComponent: () => import('./profiles/profiles.component').then(m => m.ProfilesComponent) },
];

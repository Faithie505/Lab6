import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    //when url is changed to /user, changes the page to the ulster pae
    path: 'ulster',
    loadComponent: () => import('./ulster/ulster.page').then( m => m.UlsterPage)
  },
  {
    path: 'munster',
    loadComponent: () => import('./munster/munster.page').then( m => m.MunsterPage)
  },
  {
    path: 'connaught',
    loadComponent: () => import('./connaught/connaught.page').then( m => m.ConnaughtPage)
  },
  {
    path: 'leinster',
    loadComponent: () => import('./leinster/leinster.page').then( m => m.LeinsterPage)
  },
  {
    path: 'leinster-counties',
    loadComponent: () => import('./leinster-counties/leinster-counties.page').then( m => m.LeinsterCountiesPage)
  },
];

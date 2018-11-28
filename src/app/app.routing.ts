import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core';
import { AuthLayoutComponent } from './core';
import { AuthGuard } from './shared/guards/auth.guard';

export const AppRoutes: Routes = [

  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }, {
      path: 'error',
      loadChildren: './error/error.module#ErrorModule'
    }]
  },

  {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    canActivate: [AuthGuard] ,
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'user',
    canActivate: [AuthGuard] ,
    loadChildren: './user/user.module#UserModule'
  }
]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

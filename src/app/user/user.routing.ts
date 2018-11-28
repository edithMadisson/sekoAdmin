import { Routes } from '@angular/router';

import {  ProfileComponent } from './user-profile/profile.component';

export const UserRoutes: Routes = [{
  path: '',
  component: ProfileComponent,
  data: {
    heading: 'profile'
  }
}];

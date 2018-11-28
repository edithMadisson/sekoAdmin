import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './user-profile/profile.component';
import { UserRoutes } from './user.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserRoutes)],
  declarations: [ProfileComponent]
})

export class UserModule {}

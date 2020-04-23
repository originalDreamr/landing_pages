import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterRoutingModule } from './user-center-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PayrollsComponent } from './payrolls/payrolls.component';
import { UserCenterComponent } from './user-center/user-center.component';


@NgModule({
  declarations: [DashboardComponent, ProfileComponent, PayrollsComponent, UserCenterComponent],
  imports: [
    CommonModule,
    UserCenterRoutingModule
  ]
})
export class UserCenterModule { }

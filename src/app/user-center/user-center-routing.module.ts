import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {PayrollsComponent} from './payrolls/payrolls.component';
import {UserCenterComponent} from './user-center/user-center.component';
import {DASH} from '@angular/cdk/keycodes';

const routes: Routes = [
  {
    path: 'uc',
    component: UserCenterComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'payrolls', component: PayrollsComponent},
      {path: '', component: DashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCenterRoutingModule { }

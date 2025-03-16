// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './Admin/Component/sidenav/sidenav.component';
import { ViewUsersComponent } from './pages/Access/Users/view-users/view-users.component';
import { ViewUserRolesComponent } from './pages/Access/Roles/view-user-roles/view-user-roles.component';
import { UserProfileComponent } from './pages/Access/Roles/user-profile/user-profile.component';
import { AddUserComponent } from './pages/Access/Users/add-user/add-user.component';
import { ViewPrivilegeComponent } from './pages/Access/Privilege/view-privilege/view-privilege.component';
import { AddUserRolesComponent } from './pages/Access/Roles/add-user-roles/add-user-roles.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },  // Default route
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'view-users', component: ViewUsersComponent },
  { path: 'view-user-roles', component: ViewUserRolesComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'view-privilege', component: ViewPrivilegeComponent },
  { path: 'add-user-roles', component: AddUserRolesComponent },
];

// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './Admin/Component/sidenav/sidenav.component';
import { ViewUsersComponent } from './pages/Access/Users/view-users/view-users.component';
import { ViewUserRolesComponent } from './pages/Access/Roles/view-user-roles/view-user-roles.component';
import { AddUserComponent } from './pages/Access/Users/add-user/add-user.component';
import { ViewPrivilegeComponent } from './pages/Access/Privilege/view-privilege/view-privilege.component';
import { AddUserRolesComponent } from './pages/Access/Roles/add-user-roles/add-user-roles.component';
import { EditUserProfileComponent } from './pages/Access/Profile/edit-user-profile/edit-user-profile.component';
import { EditUserRolesComponent } from './pages/Access/Roles/edit-user-roles/edit-user-roles.component';
import { AddPrivilegeComponent } from './pages/Access/Privilege/add-privilege/add-privilege.component';
import { VendorListComponent } from './pages/Access/Vendor/vendor-list/vendor-list.component';
import { EditVendorListComponent } from './pages/Access/Vendor/vendor-list/edit-vendor-list/edit-vendor-list.component';
import { EditPrivilegeComponent } from './pages/Access/Privilege/edit-privilege/edit-privilege.component';
import { EditUsersComponent } from './pages/Access/Users/edit-users/edit-users.component';
import { ViewUserProfileComponent } from './pages/Access/Profile/view-user-profile/view-user-profile.component';
import { AddUserProfileComponent } from './pages/Access/Profile/add-user-profile/add-user-profile.component';
import { UserProfileComponent } from './pages/Access/Profile/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'view-users', component: ViewUsersComponent },
  {path: 'edit-users/:id', component: EditUsersComponent},
  { path: 'view-user-roles', component: ViewUserRolesComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'view-privilege', component: ViewPrivilegeComponent },
  {path: 'edit-privilege/:id', component: EditPrivilegeComponent},
  {path: 'add-privilege', component: AddPrivilegeComponent},
  { path: 'add-user-roles', component: AddUserRolesComponent },
  {path: 'edit-user-profile/:id', component: EditUserProfileComponent},
  {path: 'user-profile/:id', component: UserProfileComponent},
  {path: 'view-user-profile', component:ViewUserProfileComponent},
  {path: 'add-user-profile', component: AddUserProfileComponent},
  {path: 'edit-user-roles', component: EditUserRolesComponent},
  {path: 'vendor-list', component: VendorListComponent},
  {path: 'edit-vendor-list/:id', component:EditVendorListComponent}
];

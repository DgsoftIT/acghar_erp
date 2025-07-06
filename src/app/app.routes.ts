import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Public Pages
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

// Layout
import { SidenavComponent } from './Admin/Component/sidenav/sidenav.component';

// Auth Guard
import { AuthGuard } from './guards/auth.guard';

// Protected Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewUsersComponent } from './pages/Access/Users/view-users/view-users.component';
import { EditUsersComponent } from './pages/Access/Users/edit-users/edit-users.component';
import { ViewUserRolesComponent } from './pages/Access/Roles/view-user-roles/view-user-roles.component';
import { AddUserComponent } from './pages/Access/Users/add-user/add-user.component';
import { ViewPrivilegeComponent } from './pages/Access/Privilege/view-privilege/view-privilege.component';
import { EditPrivilegeComponent } from './pages/Access/Privilege/edit-privilege/edit-privilege.component';
import { AddPrivilegeComponent } from './pages/Access/Privilege/add-privilege/add-privilege.component';
import { AddUserRolesComponent } from './pages/Access/Roles/add-user-roles/add-user-roles.component';
import { EditUserProfileComponent } from './pages/Access/Profile/edit-user-profile/edit-user-profile.component';
import { UserProfileComponent } from './pages/Access/Profile/user-profile/user-profile.component';
import { ViewUserProfileComponent } from './pages/Access/Profile/view-user-profile/view-user-profile.component';
import { AddUserProfileComponent } from './pages/Access/Profile/add-user-profile/add-user-profile.component';
import { EditUserRolesComponent } from './pages/Access/Roles/edit-user-roles/edit-user-roles.component';
import { VendorListComponent } from './pages/Access/Vendor/vendor-list/vendor-list.component';
import { EditVendorListComponent } from './pages/Access/Vendor/vendor-list/edit-vendor-list/edit-vendor-list.component';
import { AddVendorComponent } from './pages/Access/Vendor/add-vendor/add-vendor.component';

// Catalog
import { ViewProductComponent } from './pages/Catalog/products/view-product/view-product.component';
import { AddProductComponent } from './pages/Catalog/products/add-product/add-product.component';
import { EditProductComponent } from './pages/Catalog/products/edit-product/edit-product.component';
import { AddCategoryComponent } from './pages/Catalog/category/add-category/add-category.component';
import { EditCategoryComponent } from './pages/Catalog/category/edit-category/edit-category.component';
import { ViewCategoryComponent } from './pages/Catalog/category/view-category/view-category.component';
import { ViewBrandComponent } from './pages/Catalog/brand/view-brand/view-brand.component';
import { AddBrandComponent } from './pages/Catalog/brand/add-brand/add-brand.component';
import { EditBrandComponent } from './pages/Catalog/brand/edit-brand/edit-brand.component';

// Routes
export  const routes: Routes = [
  // Public Routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  // Protected Routes under admin layout
  {
    path: 'admin',
    component: SidenavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'view-users', component: ViewUsersComponent },
      { path: 'edit-users/:id', component: EditUsersComponent },
      { path: 'view-user-roles', component: ViewUserRolesComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'view-privilege', component: ViewPrivilegeComponent },
      { path: 'edit-privilege/:id', component: EditPrivilegeComponent },
      { path: 'add-privilege', component: AddPrivilegeComponent },
      { path: 'add-user-roles', component: AddUserRolesComponent },
      { path: 'edit-user-profile/:id', component: EditUserProfileComponent },
      { path: 'user-profile/:id', component: UserProfileComponent },
      { path: 'view-user-profile', component: ViewUserProfileComponent },
      { path: 'add-user-profile', component: AddUserProfileComponent },
      { path: 'edit-user-roles/:id', component: EditUserRolesComponent },
      { path: 'vendor-list', component: VendorListComponent },
      { path: 'edit-vendor-list/:id', component: EditVendorListComponent },
      { path: 'add-vendor', component: AddVendorComponent },
      { path: 'view-category', component: ViewCategoryComponent },
      { path: 'view-product', component: ViewProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'edit-category/:id', component: EditCategoryComponent },
      { path: 'view-brand', component: ViewBrandComponent },
      { path: 'add-brand', component: AddBrandComponent },
      { path: 'edit-brand', component: EditBrandComponent },

      // Fallback inside admin
      { path: '**', redirectTo: 'dashboard' }
    ]
  },

  // Global Fallback Route
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

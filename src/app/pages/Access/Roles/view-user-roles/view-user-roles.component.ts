import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-user-roles',
  standalone: true,
  templateUrl: './view-user-roles.component.html',
  styleUrls: ['./view-user-roles.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class ViewUserRolesComponent implements OnInit {
  users = [
    { id: 1, name: 'Sunita Dulal', roles: 'Admin', privilege: 'Full', status: 'Active', image: 'assets/login/admin.png' },
    { id: 2, name: 'Sapana Poudel', roles: 'Editor', privilege: 'Limited', status: 'Inactive', image: '' },
    { id: 3, name: 'Deepu', roles: 'User', privilege: 'Restricted', status: 'Active', image: null }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editUser(id: number): void {
    console.log('Navigating to edit page with id:', id);
    this.router.navigate(['/edit-user-roles', id]);
  }
  
  viewUser(id: number): void {
    console.log('Viewing user with id:', id);
    this.router.navigate(['/view-user-roles', id]);
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
    this.users = this.users.filter(u => u.id !== user.id);
  }

  viewUserProfile(id: number): void {
    console.log('Navigating to profile of user with id:', id);
    this.router.navigate(['/user-profile', id]); 
  }

  goToAddUserRoles(): void {
    console.log('Navigating to add user roles');
    this.router.navigate(['/add-user-roles']);
  }

  // Handle privilege change
  onPrivilegeChange(user: any): void {
    console.log('Privilege changed for user with id:', user.id, 'New privilege:', user.privilege);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-user-roles',
  standalone: true,
  templateUrl: './view-user-roles.component.html',
  styleUrls: ['./view-user-roles.component.css'],
  imports: [CommonModule]
})
export class ViewUserRolesComponent implements OnInit {
  users = [
    { id: 1, name: 'Sunita Dulal', roles: 'Admin', panNumber: '1234567890', status: 'Active', image: 'assets/login/admin.png' },
    { id: 2, name: 'Sapana Poudel', roles: 'Editor', panNumber: '9876543210', status: 'Inactive', image: '' },
    { id: 3, name: 'Deepu', roles: 'User', panNumber: '5555555555', status: 'Active', image: null }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
 
  }

  editUser(user: any) {
    this.router.navigate(['/edit-user-roles', user.id]);
  }
  
  viewUser(id: number): void {
    console.log('Viewing user with id:', id);
  }

  deleteUser(id: number): void {
    console.log('Deleting user with id:', id);
  }

  userProfile(id: number): void {
    console.log('Viewing profile of user with id:', id);
  }

  viewUserProfile(id: number): void {
    console.log('Navigating to profile of user with id:', id);
    this.router.navigate(['/user-profile', id]); 
  }

  goToAddUserRoles(): void {
    this.router.navigate(['/add-user-roles']);
  }
}

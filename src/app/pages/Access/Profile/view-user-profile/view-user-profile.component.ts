
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-view-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent {
  users = [
    { id: 1, name: 'Sunita Dulal', roles: 'Admin', status: 'Active', image: 'assets/login/admin.png' },
    { id: 2, name: 'Sapana Poudel', roles: 'Editor', status: 'Inactive', image: 'assets/login/admin.png' },
    { id: 3, name: 'Deepu', roles: 'User', status: 'Active', image: '' },
  ];

  constructor(private router: Router) {} 
  goToAddUserProfile() {
    this.router.navigate(['/add-user-profile']); 
  }

  editUser(userId: number) {
    this.router.navigate(['/edit-user-profile', userId]); 
  }
  userProfile(userId: number) {
    this.router.navigate(['/user-profile', userId]);
  }
  viewUser(userId: number) {
    console.log('View user with ID:', userId);
  }

  deleteUser(userId: number) {
    console.log('Delete user with ID:', userId);
  }
}
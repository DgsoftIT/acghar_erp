import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  users = [
    { id: 1, name: 'Kalpana Bhatt', role: 'Admin', phone: '9876543210', bloodGroup: 'O+', status: 'Active', panNum: '123456', privilege: 'Full Access' },
    { id: 2, name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive', panNum: '654321', privilege: 'Limited Access' },
    { id: 3, name: 'Bikash Sharma', role: 'Manager', phone: '9876543212', bloodGroup: 'B+', status: 'Active', panNum: '789123', privilege: 'Admin' },
    { id: 4, name: 'Sujan Shrestha', role: 'User', phone: '9876543213', bloodGroup: 'AB-', status: 'Inactive', panNum: '456789', privilege: 'User' },
    { id: 5, name: 'Anjana Rai', role: 'HR', phone: '9876543214', bloodGroup: 'O-', status: 'Active', panNum: '321654', privilege: 'HR' },
  ];

  constructor(private router: Router) {}

  goToAddUser() {
    this.router.navigate(['/add-user']); 
  }

  editUser(user: any) {
    this.router.navigate(['/edit-users', user.id]);
  }

  viewUser(user: any) {
    this.router.navigate(['/user-profile', user.id]);  // ✅ Navigate to User Profile
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
  }

  currentPage: number = 1;
  pageSize: number = 2; 

  nextPage() {
    if (this.currentPage * this.pageSize < this.users.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }
}

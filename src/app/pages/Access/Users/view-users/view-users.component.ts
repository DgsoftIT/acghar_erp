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
    { id: 'USER-1', name: 'Kalpana Bhatt', phone: '9876543210', email: 'kalpana@example.com', bloodGroup: 'O+', role: 'Admin', privilege: ['Dashboard ..'] },
    { id: 'USER-2', name: 'Jarnila Thak', phone: '9876543211', email: 'jarnila@example.com', bloodGroup: 'A-', role: 'User', privilege: ['User Access ..'] },
    { id: 'USER-3', name: 'Bikash Sharma', phone: '9876543212', email: 'bikash@example.com', bloodGroup: 'B+', role: 'Manager', privilege: ['Admin ..', ] },
    { id: 'USER-4', name: 'Sujan Shrestha', phone: '9876543213', email: 'sujan@example.com', bloodGroup: 'AB-', role: 'User', privilege: ['User ..'] },
    { id: 'USER-5', name: 'Anjana Rai', phone: '9876543214', email: 'anjana@example.com', bloodGroup: 'O-', role: 'HR', privilege: [ 'Admin ..'] },
  ];

  constructor(private router: Router) {}

  goToAddUser() {
    this.router.navigate(['/add-user']); 
  }

  editUser(user: any) {
    this.router.navigate(['/edit-users', user.id]);
  }

  viewUser(user: any) {
    this.router.navigate(['/user-profile', user.id]);  
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

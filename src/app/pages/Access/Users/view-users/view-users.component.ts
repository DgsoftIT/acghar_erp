import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  users = [
    { name: 'Kalpana Bhatt', role: 'Admin', phone: '9876543210', bloodGroup: 'O+', status: 'Active' },
    { name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' }
  ];

  constructor(private router: Router) {}

  goToAddUser() {
    this.router.navigate(['/add-user']);
  }

  editUser(user: any) {
    console.log('Edit user:', user);
  }

  viewUser(user: any) {
    console.log('View user:', user);
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
  }

  previousPage() {
    console.log('Go to previous page');
  }

  nextPage() {
    console.log('Go to next page');
  }
  //fetch user from backend
  
  }



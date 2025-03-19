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
    { id: 1,name: 'Kalpana Bhatt', role: 'Admin', phone: '9876543210', bloodGroup: 'O+', status: 'Active' },
    {id: 1, name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    {id: 1, name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { id: 1,name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' },
    { name: 'Jarnila Thak', role: 'User', phone: '9876543211', bloodGroup: 'A-', status: 'Inactive' }
  ];

  constructor(private router: Router) {}
  goToAddUser() {
    this.router.navigate(['/add-user']); 
  }
  editUser(user: any) { 
    this.router.navigate(['/edit-user', user.id]); 
  }

  viewUser(user: any) {
    this.router.navigate(['/view-user', user.id]); 
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

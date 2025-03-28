import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  standalone: true, // Ensure standalone component
  imports: [CommonModule], // Include CommonModule for *ngFor and *ngIf
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  users = [
    { 
      id: 1, 
      name: 'Kalpana Bhatt', 
      role: 'Admin', 
      phone: '9876543210', 
      bloodGroup: 'O+', 
      status: 'Active',
      productNo: 'P001',
      productName: 'Laptop',
      date: '2024-03-17'
    },
    { 
      id: 2, 
      name: 'Jarnila Thak', 
      role: 'User', 
      phone: '9876543211', 
      bloodGroup: 'A-', 
      status: 'Inactive',
      productNo: 'P002',
      productName: 'Mobile Phone',
      date: '2024-03-16'
    },
    { 
      id: 3, 
      name: 'Suresh Karki', 
      role: 'Vendor', 
      phone: '9812345678', 
      bloodGroup: 'B+', 
      status: 'Active',
      productNo: 'P003',
      productName: 'Smart Watch',
      date: '2024-03-15'
    },
    { 
      id: 3, 
      name: 'Suresh Karki', 
      role: 'Vendor', 
      phone: '9812345678', 
      bloodGroup: 'B+', 
      status: 'Active',
      productNo: 'P003',
      productName: 'Smart Watch',
      date: '2024-03-15'
    },
    { 
      id: 3, 
      name: 'Suresh Karki', 
      role: 'Vendor', 
      phone: '9812345678', 
      bloodGroup: 'B+', 
      status: 'Active',
      productNo: 'P003',
      productName: 'Smart Watch',
      date: '2024-03-15'
    },
    { 
      id: 3, 
      name: 'Suresh Karki', 
      role: 'Vendor', 
      phone: '9812345678', 
      bloodGroup: 'B+', 
      status: 'Active',
      productNo: 'P003',
      productName: 'Smart Watch',
      date: '2024-03-15'
    },
    { 
      id: 3, 
      name: 'Suresh Karki', 
      role: 'Vendor', 
      phone: '9812345678', 
      bloodGroup: 'B+', 
      status: 'Active',
      productNo: 'P003',
      productName: 'Smart Watch',
      date: '2024-03-15'
    }
  ];

  constructor(private router: Router) {}

  goToAddVendor() {
    this.router.navigate(['/add-vendor']);
  }

  editUser(user: any) {
    this.router.navigate(['/edit-vendor-list', user.id]);
  }

  viewUser(user: any) {
    console.log('View user:', user);
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
    this.users = this.users.filter(u => u.id !== user.id);
  }

  previousPage() {
    console.log('Go to previous page');
  }

  nextPage() {
    console.log('Go to next page');
  }
}

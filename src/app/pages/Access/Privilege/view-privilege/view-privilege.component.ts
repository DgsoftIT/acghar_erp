import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-privilege',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-privilege.component.html',
  styleUrls: ['./view-privilege.component.css']
})
export class ViewPrivilegeComponent {

  users = [
    { id: 1, name: 'Srijana Ghimire', privileges: ['Dashboard', 'Sales'] },
    { id: 2, name: 'Sunita Dulal', privileges: ['Sales', 'Catalogue'] },
    { id: 3, name: 'Nabin Chaudhari', privileges: ['Dashboard', 'Catalogue'] }
  ];

  constructor(private router: Router) {}

  goToAddPrivilege() {
    this.router.navigate(['/add-privilege']);  
  }

  editUser(user: any) {
    console.log('Editing user:', user);
    this.router.navigate(['/edit-privilege', user.id]); // Fixed Route
  }

  viewUser(user: any) {
    console.log('Viewing user:', user);
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
    
    // Remove user from list
    this.users = this.users.filter(u => u.id !== user.id);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-privilege',
  templateUrl: './view-privilege.component.html',
  styleUrls: ['./view-privilege.component.css']
})
export class ViewPrivilegeComponent {
  // Example users array (this should be fetched from a service in a real application)
  users = [
    { id: 1, role: 'Super Admin', privileges: ['Dashboard', 'Sales'] },
    { id: 2, role: 'Admin', privileges: ['Sales', 'Catalogue'] },
    { id: 3, role: 'Accountant', privileges: ['Dashboard', 'Catalogue'] }
  ];

  constructor(private router: Router) {}
  goToAddPrivilege() {
    this.router.navigate(['/add-privilege']);  // Route to Add Privilege page
  }
  editUser(user: any) {
    this.router.navigate(['/edit-privilege', user.id]);
  }
}





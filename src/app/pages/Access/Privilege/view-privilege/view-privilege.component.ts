import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-privilege',
  templateUrl: './view-privilege.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./view-privilege.component.css']
})
export class ViewPrivilegeComponent {
  
  users = [
    { id: 1, name: 'srijana',role: 'Super Admin', privileges: ['Dashboard', 'Sales'] },
    { id: 2, name: 'srijana', role: 'Admin', privileges: ['Sales', 'Catalogue'] },
    { id: 3, name: 'srijana', role: 'Accountant', privileges: ['Dashboard', 'Catalogue'] }
  ];

  constructor(private router: Router) {}
  goToAddPrivilege() {
    this.router.navigate(['/add-privilege']);  
  }
  editUser(user: any) {
    this.router.navigate(['/edit-privilege', user.id]);
  }
}





import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-user-roles',
  templateUrl: './add-user-roles.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./add-user-roles.component.css'],
})
export class AddUserRolesComponent {
  newUser: any = { id: '', name: '', roles: [] };
  availableRoles = [
    'Super Admin', 'Admin', 'Supervisor', 'Team Leader', 
    'Employee', 'User', 'Trainee', 'Guest'
  ];
  selectedRole: string = '';
  showCheckboxes = false;

  constructor(private router: Router) {}

  toggleRole(role: string) {
    if (this.newUser.roles.includes(role)) {
      this.newUser.roles = this.newUser.roles.filter((r: string) => r !== role);
    } else {
      this.newUser.roles.push(role);
    }
  }

  onRoleSelect() {
    this.showCheckboxes = true;
  }

  onSubmit() {
    console.log('New User Roles:', this.newUser);
    this.router.navigate(['/view-user-roles']);
  }

  onCancel() {
    this.router.navigate(['/view-user-roles']);
  }
}

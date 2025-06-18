import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./edit-user-roles.component.css'],
})
export class EditUserRolesComponent {
  user: any = { id: '', name: '', roles: [] };
  availableRoles = [
    'Super Admin', 'Admin', 'Supervisor', 'Team Leader', 'Employee', 'User', 'Trainee', 'Guest'
  ];
  selectedRole: string = '';
  showCheckboxes = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', userId); // Debugging
    if (userId) {
      this.loadUserData(userId);
    }
  }

  loadUserData(userId: string | null) {
    const users = [
      { id: '1', name: 'Srijana Ghimire', roles: ['Super Admin', 'Admin'] },
      { id: '2', name: 'Sunita Dulal', roles: ['Supervisor'] },
      { id: '3', name: 'Nabin Chaudhari', roles: ['Employee', 'User'] }
    ];

    if (userId) {
      this.user = users.find(user => user.id === userId) || { id: '', name: '', roles: [] };
    }

    console.log('Loaded User Data:', this.user); // Debugging
  }

  toggleRole(role: string) {
    if (this.user.roles.includes(role)) {
      this.user.roles = this.user.roles.filter((r: string) => r !== role);
    } else {
      this.user.roles.push(role);
    }
  }

  onRoleSelect() {
    this.showCheckboxes = true;
  }

  onSubmit() {
    console.log('Updated User:', this.user);
    this.router.navigate(['/view-user-roles']);
  }

  onCancel() {
    this.router.navigate(['/view-user-roles']);
  }
}

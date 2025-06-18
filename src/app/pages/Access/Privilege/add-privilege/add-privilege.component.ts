import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-privilege',
  templateUrl: './add-privilege.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./add-privilege.component.css'],
})
export class AddPrivilegeComponent {
  privilegeTitle: string = ''; // Privilege title input
  availablePrivileges = [
    'Dashboard', 'Sales', 'Catalog', 'Home Page', 'Content Section', 
    'E-commerce Setting', 'CMS', 'Access Report', 'Employee', 'Vendor'
  ];
  selectedPrivilege: string = ''; 
  selectedPrivileges: string[] = []; // Stores selected privileges
  showCheckboxes = false;

  constructor(private router: Router) {}

  togglePrivilege(privilege: string) {
    if (this.selectedPrivileges.includes(privilege)) {
      this.selectedPrivileges = this.selectedPrivileges.filter((p) => p !== privilege);
    } else {
      this.selectedPrivileges.push(privilege);
    }
  }

  onPrivilegeSelect() {
    this.showCheckboxes = true;
  }

  onSubmit() {
    console.log('Added Privilege:', { title: this.privilegeTitle, privileges: this.selectedPrivileges });
    this.router.navigate(['/view-privilege']); // Redirect to the privilege list page
  }

  onCancel() {
    this.router.navigate(['/view-privilege']);
  }
}

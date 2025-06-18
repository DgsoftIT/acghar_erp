import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-privilege',
  templateUrl: './edit-privilege.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./edit-privilege.component.css'],
})
export class EditPrivilegeComponent {
  user: any = { privilegeTitle: '', privileges: [] }; // Removed ID & Name
  availablePrivileges = [
    'Dashboard', 'Sales', 'Catalog', 'Home Page', 'Content Section', 
    'E-commerce Setting', 'CMS', 'Access Report', 'Employee', 'Vendor'
  ];
  selectedPrivilege: string = ''; 
  showCheckboxes = false;

  constructor(private router: Router) {}

  togglePrivilege(privilege: string) {
    if (this.user.privileges.includes(privilege)) {
      this.user.privileges = this.user.privileges.filter((p: string) => p !== privilege);
    } else {
      this.user.privileges.push(privilege);
    }
  }

  onPrivilegeSelect() {
    this.showCheckboxes = true;
  }

  onSubmit() {
    console.log('Updated Privilege:', this.user);
    this.router.navigate(['/view-privilege']);
  }

  onCancel() {
    this.router.navigate(['/view-privilege']);
  }
}

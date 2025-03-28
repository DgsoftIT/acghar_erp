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
  user: any = { id: '', name: '', privileges: [] };
  availablePrivileges = [
    'Dashboard', 'Sales', 'Catalog', 'Home Page', 'Content Section', 
    'E-commerce Setting', 'CMS', 'Access Report', 'Employee', 'Vendor'
  ];
  selectedPrivilege: string = ''; // Store selected privilege
  showCheckboxes = false; // Control visibility of checkboxes

  constructor(private route: ActivatedRoute, private router: Router) {
    const userId = this.route.snapshot.paramMap.get('id');
    this.loadUserData(userId);
  }

  loadUserData(userId: string | null) {
    const users = [
      { id: '1', name: 'Srijana Ghimire', privileges: ['Dashboard', 'Sales'] },
      { id: '2', name: 'Sunita Dulal', privileges: ['Sales'] },
      { id: '3', name: 'Nabin Chaudhari', privileges: ['Catalog', 'Reports'] }
    ];

    if (userId) {
      this.user = users.find(user => user.id === userId) || { id: '', name: '', privileges: [] };
    }
  }

  togglePrivilege(privilege: string) {
    if (this.user.privileges.includes(privilege)) {
      this.user.privileges = this.user.privileges.filter((p: string) => p !== privilege);
    } else {
      this.user.privileges.push(privilege);
    }
  }

  // Show checkboxes after selecting a privilege
  onPrivilegeSelect() {
    this.showCheckboxes = true; // Show checkboxes when dropdown is selected
  }

  onSubmit() {
    console.log('Updated User:', this.user);
    this.router.navigate(['/view-privilege']);
  }

  onCancel() {
    this.router.navigate(['/view-privilege']);
  }
}

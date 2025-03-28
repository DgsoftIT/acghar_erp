import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all-privilege',
  standalone: true,
  templateUrl: './add-privilege.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./add-privilege.component.css'],
})
export class AddPrivilegeComponent {
  privileges = [
    { name: 'Dashboard', icon: 'dashboard', description: 'Manage overall system insights' },
    { name: 'Sales', icon: 'shopping_cart', description: 'Track and manage sales data' },
    { name: 'Catalog', icon: 'inventory', description: 'Manage product listings and categories' },
    { name: 'Home Page', icon: 'home', description: 'Edit homepage content and banners' },
    { name: 'Content Section', icon: 'description', description: 'Manage website content and articles' }, // ✅ Added Content Section
    { name: 'E-commerce Setting', icon: 'settings', description: 'Configure e-commerce platform' },
    { name: 'CMS', icon: 'article', description: 'Manage website content and pages' },
    { name: 'Access Report', icon: 'bar_chart', description: 'View access and activity logs' },
    { name: 'Employee', icon: 'people', description: 'Manage employee details and roles' },
    { name: 'Vendor', icon: 'store', description: 'Handle vendor registrations and products' },
  ];
}

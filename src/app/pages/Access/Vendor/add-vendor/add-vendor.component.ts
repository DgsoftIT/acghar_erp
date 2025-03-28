import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent {
  vendor = {
    name: '',
    date: '',
    productNo: '',
    productName: '',
    status: 'Active',  // Default value is Active
  };

  addVendor() {
    if (this.vendor.name && this.vendor.date && this.vendor.productNo && this.vendor.productName && this.vendor.status) {
      console.log('Vendor data:', this.vendor);
      // Add your logic here to save the vendor data
    } else {
      console.log('Please fill in all fields');
    }
  }

  cancelAdd() {
    console.log('Vendor addition canceled');
    // Add logic for canceling the vendor addition (e.g., navigate back)
  }
}

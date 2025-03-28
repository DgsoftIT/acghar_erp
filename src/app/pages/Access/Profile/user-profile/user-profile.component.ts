import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private router: Router) {} // ✅ Inject Router service

  user = {
    id: 'U12345',
    name: 'Sunita Dulal',
    roles: 'Admin',
    panNo: 'PAN987654321',
    phoneNumber: '+976876567',
    bloodGroup: 'O+',
    privilege: 'Full Access',
    status: 'Active',
    email: 'Sunitadulal@gmail.com',
    contact: '+976876567',
    image: ''
  };

  editUserProfile() {
    this.router.navigate(['/edit-user-profile', this.user.id]); 
  }
}

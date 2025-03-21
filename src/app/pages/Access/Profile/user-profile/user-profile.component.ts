import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    
    id: 'U12345',
    name: 'Sunita Dulal',
    roles: 'Admin',
    status: 'Active',
    email: 'Sunitadulal@gmail.com',
    contact: '+976876567',
    image: ''
  };

  editUserProfile() {
    console.log('Edit Profile Clicked');
  }
}

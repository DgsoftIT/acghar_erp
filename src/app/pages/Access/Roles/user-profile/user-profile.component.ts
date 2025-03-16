import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Import FormsModule here
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: '',
    email: '',
    contact: '',
    address: '',
    panNumber: ''
  };

  goBack() {
    console.log("Going back...");
  }

  saveProfile() {
    console.log("Profile saved:", this.user);
  }

  editProfile() {
    console.log("Editing profile...");
  }

  viewDocument() {
    console.log("Viewing document...");
  }
 
}

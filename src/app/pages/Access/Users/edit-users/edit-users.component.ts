
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true, // Required for Standalone Components
  templateUrl: './edit-users.component.html',
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
  user = {
    id: 0,
    name: '',
    role: '',
    privilege: 'User',   // Default value for privilege
    phone: '',
    bloodGroup: '',
    panNumber: '',
    status: '',
    image: ''  
  };

  constructor(private router: Router) {}

  saveUser() {
    console.log('User saved:', this.user);
    // You can call an API to save the user or navigate back to users list
  }

  cancelEdit() {
    console.log('Edit canceled');
    this.router.navigate(['/users']);
  }

  userProfile(userId: number) {
    console.log('Viewing profile of user ID:', userId);
  }
} 
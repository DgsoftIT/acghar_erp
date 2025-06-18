import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css'],
  imports: [CommonModule, FormsModule] // ✅ Ensure imports are correctly placed
})
export class EditUsersComponent implements OnInit {
  user = {
    id: '',  
    name: '',
    address: '',
    email: '',
    bloodGroup: '',  
    panNumber: '',
    phoneNumber: '',
    password: '********', 
    image: '',
    role: '',
    privileges: <string[]>[]  // ✅ Explicitly define as an array of strings
  };

  availablePrivileges: string[] = ['Super Admin', 'Admin', 'Supervisor', 'Team Leader', 'Employee', 'User', 'Trainee', 'Guest'];

  constructor(private router: Router) {}

  ngOnInit() {
    // Auto-generate a user ID when the component loads
    this.user.id = this.generateUserId();
  }

  // Method to auto-generate a unique user ID
  generateUserId(): string {
    return 'USER-' + Date.now(); 
  }

  saveUser() {
    console.log('User saved:', this.user);
    // API call to save the user data
  }

  cancelEdit() {
    console.log('Edit canceled');
    this.router.navigate(['/users']);
  }

  userProfile(userId: string) {
    console.log('Viewing profile of user ID:', userId);
    // Logic for viewing user profile
  }

  resetPassword() {
    if (confirm('Are you sure you want to reset the password?')) {
      this.user.password = 'Reset_Password';  // Simulate password reset
      console.log('Password has been reset!');
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.image = reader.result as string;  
      };
      reader.readAsDataURL(file); 
    }
  }

  updatePrivileges(event: any) {
    const privilege = event.target.value;
    if (event.target.checked) {
      // Add privilege if it's not already in the array
      if (!this.user.privileges.includes(privilege)) {
        this.user.privileges = [...this.user.privileges, privilege]; 
      }
    } else {
      // Remove privilege if it was unchecked
      this.user.privileges = this.user.privileges.filter(p => p !== privilege);
    }
  }
  
}

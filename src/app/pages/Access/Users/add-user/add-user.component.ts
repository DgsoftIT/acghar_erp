import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  templateUrl: './add-user.component.html',
  imports: [CommonModule, FormsModule, RouterModule], 
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: any = {
    id: '',
    name: '',
    address: '',
    email: '',
    bloodGroup: '',
    panNumber: '',
    phoneNumber: '',
    password: '',
    image: '',
    role: '',
    privileges: [] 
  };

  availablePrivileges = ['View Dashboard', 'Manage Users', 'Edit Content', 'Delete Posts']; 
  
  constructor() {}

  saveUser() {
    console.log('User saved:', this.user);
  }

  cancelEdit() {
    console.log('Edit canceled');
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  updatePrivileges(event: any) {
    const privilege: string = event.target.value;
    if (event.target.checked) {
      if (!this.user.privileges.includes(privilege)) {
        this.user.privileges = [...this.user.privileges, privilege]; 
      }
    } else {
      this.user.privileges = this.user.privileges.filter((p: string) => p !== privilege);
    }
  }
  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  imports: [RouterModule,CommonModule, FormsModule],
  styleUrls: ['./edit-user-roles.component.css']
})
export class EditUserRolesComponent {
  user = {
    name: '',
    email: '',
    roles: ''
  };

  privileges = ['Admin', 'User', 'Manager'];

  onSubmit() {
    if (this.user.name && this.user.email && this.user.roles) {
      console.log('User data:', this.user);
      // Add your form submission logic here
    } else {
      console.log('Please fill in all fields');
    }
    
  }
  
}

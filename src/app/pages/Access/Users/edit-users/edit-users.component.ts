import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-users.component.html',
  imports: [FormsModule, RouterModule],
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
  user = {
    name: '',
    role: '',
    phone: '',
    bloodGroup: '',
    status: ''
  };

  saveUser() {
    console.log('User saved:', this.user);
  }

  cancelEdit() {
    console.log('Edit canceled');
  }
}

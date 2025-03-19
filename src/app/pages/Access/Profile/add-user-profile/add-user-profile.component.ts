import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-user-profile.component.html',
  styleUrls: ['./add-user-profile.component.css']
})
export class AddUserProfileComponent {
  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    roles: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get name() { return this.addUserForm.get('name'); }
  get id() { return this.addUserForm.get('id'); }
  get roles() { return this.addUserForm.get('roles'); }
  get status() { return this.addUserForm.get('status'); }
  get email() { return this.addUserForm.get('email'); }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User Profile Added:', this.addUserForm.value);
      alert('User Profile Added Successfully!');
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}

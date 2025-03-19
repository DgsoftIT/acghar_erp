import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  styleUrls: ['./edit-user-roles.component.css']
})
export class EditUserRolesComponent {
  addUserForm: FormGroup;

  constructor() {
    // Initialize the form with validators
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      roles: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      bloodGroup: new FormControl('', [Validators.required]),
    });
  }

  // Getters for the form controls to simplify access in the template
  get name() { return this.addUserForm.get('name'); }
  get email() { return this.addUserForm.get('email'); }
  get roles() { return this.addUserForm.get('roles'); }
  get phoneNumber() { return this.addUserForm.get('phoneNumber'); }
  get bloodGroup() { return this.addUserForm.get('bloodGroup'); }

  // Submit handler
  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User Added:', this.addUserForm.value);
      alert('User Added Successfully!');
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}

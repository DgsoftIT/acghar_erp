import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-user-roles',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-user-roles.component.html',
  styleUrls: ['./add-user-roles.component.css']
})
export class AddUserRolesComponent {
  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    roles: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    privilege: new FormControl('User', [Validators.required])  // Added privilege control
  });

  get name() { return this.addUserForm.get('name'); }
  get email() { return this.addUserForm.get('email'); }
  get roles() { return this.addUserForm.get('roles'); }
  get phoneNumber() { return this.addUserForm.get('phoneNumber'); }
  get privilege() { return this.addUserForm.get('privilege'); }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User Added:', this.addUserForm.value);
      alert('User Added Successfully!');
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}

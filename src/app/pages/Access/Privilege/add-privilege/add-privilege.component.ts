import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-privilege.component.html',
  styleUrls: ['./add-privilege.component.css']
})
export class AddPrivilegeComponent {
  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    roles: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    bloodGroup: new FormControl('', [Validators.required]),
    privilege: new FormControl('', [Validators.required]), // Added this line
  });

  get name() { return this.addUserForm.get('name'); }
  get email() { return this.addUserForm.get('email'); }
  get roles() { return this.addUserForm.get('roles'); }
  get phoneNumber() { return this.addUserForm.get('phoneNumber'); }
  get bloodGroup() { return this.addUserForm.get('bloodGroup'); }
  get privilege() { return this.addUserForm.get('privilege')!; } // Non-null assertion added

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User Added:', this.addUserForm.value);
      alert('User Added Successfully!');
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-add-privilege',
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
  });

  get name() { return this.addUserForm.get('name'); }
  get email() { return this.addUserForm.get('email'); }
  get roles() { return this.addUserForm.get('roles'); }
  get phoneNumber() { return this.addUserForm.get('phoneNumber'); }
  get bloodGroup() { return this.addUserForm.get('bloodGroup'); }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User Added:', this.addUserForm.value);
      alert('User Added Successfully!');
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}

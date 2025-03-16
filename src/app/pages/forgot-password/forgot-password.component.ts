import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private router: Router) {}

  get email() {
    return this.forgotPasswordForm.get('email')!;
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      // Log the email (optional for now)
      console.log("Reset link sent to:", this.forgotPasswordForm.value.email);

      // After form submission, navigate to the reset password page
      this.router.navigate(['/reset-password']);
    } else {
      // Optionally show some error message here if the form is not valid
      console.log('Invalid email!');
    }
  }

  goToLogin() {
    this.router.navigate(['/']); // Redirects back to login page
  }
}

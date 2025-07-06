
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'app/services/api/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
  if (this.loginForm.valid) {
    // For now, mock login success without backend:
    

    // MOCK login success:
    localStorage.setItem('token', 'mock-token-12345');  
    this.router.navigate(['/admin/dashboard']);         

    // Optional: show alert or console log
    console.log('Mock login success, token set');
  } else {
    alert('Please fill out all fields');
  }


}


  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}

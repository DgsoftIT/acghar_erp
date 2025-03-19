
import { Component, OnInit } from '@angular/core'; // ✅ Import OnInit
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // ✅ Import ActivatedRoute

@Component({
  selector: 'app-edit-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  user = {
    name: '',
    email: '',
    contact: '',
    address: '',
    panNumber: ''
  };

  userId: number = 0;

  constructor(private route: ActivatedRoute) {} // ✅ Inject ActivatedRoute

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id')); // ✅ Get user ID from route
    console.log('Editing user with ID:', this.userId);
  }

  goBack() {
    console.log("Going back...");
  }

  saveProfile() {
    console.log("Profile saved:", this.user);
  }

  editProfile() {
    console.log("Editing profile...");
  }

  viewDocument() {
    console.log("Viewing document...");
  }
}  
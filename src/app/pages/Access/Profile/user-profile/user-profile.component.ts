import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: number = 0; // Initialize userId to 0 or any default value
  user: any = null; // Object to hold user data

  // Sample user data (you can replace this with API data)
  users = [
    { id: 1, name: 'Sunita Dulal', roles: 'Admin', status: 'Active', image: 'assets/login/admin.png', email: 'sunita@example.com' },
    { id: 2, name: 'Sapana Poudel', roles: 'Editor', status: 'Inactive', image: 'assets/login/admin.png', email: 'sapana@example.com' },
    { id: 3, name: 'Deepu', roles: 'User', status: 'Active', image: '', email: 'deepu@example.com' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the userId from the route parameter
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.userId = Number(idParam);  // Safely convert the string to a number
        if (this.userId) {
          this.getUserProfile(this.userId);
        } else {
          console.log('Invalid user ID');
          this.router.navigate(['/view-users']); // Redirect to the user list page if id is not a valid number
        }
      } else {
        console.log('ID parameter missing');
        this.router.navigate(['/view-users']); // Redirect to the user list page if no ID parameter exists
      }
    });
  }

  // Method to get the user profile from the users data (or API)
  getUserProfile(id: number) {
    // Find the user by id (You can replace this with a service call to fetch from API)
    const foundUser = this.users.find(user => user.id === id);
    if (foundUser) {
      this.user = foundUser;
    } else {
      // Handle case when user is not found
      console.log('User not found');
      this.router.navigate(['/view-users']); // Redirect to the user list page
    }
  }

  // Method to edit the user profile
  editUserProfile() {
    console.log('Edit User Profile clicked');
    this.router.navigate(['/edit-user-profile', this.userId]); 
  }
}
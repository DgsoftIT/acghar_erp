import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-users',
  standalone: true,
  templateUrl: './view-user-roles.component.html',
  styleUrls: ['./view-user-roles.component.css']
})
export class ViewUserRolesComponent {
  constructor(private router: Router) {}

  goToAddUserRoles() {
    this.router.navigate(['/add-user-roles']);
  }
}

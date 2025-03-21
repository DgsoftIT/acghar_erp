import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-profile',  
  templateUrl: './view-pofile.component.html',
  styleUrls: ['./view-pofile.component.css']
})
export class ViewPofileComponent {
  constructor(private router: Router) {} 

  editUser(user: any) {
    this.router.navigate(['/edit-user-roles', user.id]); 
  }
}

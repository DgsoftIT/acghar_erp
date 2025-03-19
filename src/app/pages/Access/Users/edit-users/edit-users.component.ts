import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  viewId: string | null = null; 

  constructor(private route: ActivatedRoute, private router: Router) {} // ✅ Inject Router

  ngOnInit() {
    this.viewId = this.route.snapshot.paramMap.get('id');
    console.log('Editing view with ID:', this.viewId);
  }

  editUser(user: any) {
    console.log('Editing user:', user);
    this.router.navigate(['/edit-user', user.id]); // ✅ Now `router` is accessible
  }
}

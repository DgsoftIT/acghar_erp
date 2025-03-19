import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-privilege',
  templateUrl: './edit-privilege.component.html',
  styleUrls: ['./edit-privilege.component.css']
})
export class EditPrivilegeComponent implements OnInit {
  userId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the user ID from the URL parameter
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id')!;
      console.log('User ID to edit:', this.userId);
      // Load user data or perform other logic based on the user ID
    });
  }
}

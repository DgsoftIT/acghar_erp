import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-privilege',
  templateUrl: './edit-privilege.component.html',
  imports: [CommonModule, FormsModule, RouterModule], 
  styleUrls: ['./edit-privilege.component.css']
})
export class EditPrivilegeComponent implements OnInit {
  userId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id')!;
      console.log('User ID to edit:', this.userId);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-vendor-list',
  standalone: true, // Mark as a standalone component
  imports: [CommonModule], // Add CommonModule if standalone
  templateUrl: './edit-vendor-list.component.html',
  styleUrls: ['./edit-vendor-list.component.css']
})
export class EditVendorListComponent implements OnInit {
  vendorId: string | null = null;

  constructor(private route: ActivatedRoute) {} 

  ngOnInit() {
    this.vendorId = this.route.snapshot.paramMap.get('id');
    console.log('Editing vendor with ID:', this.vendorId);
  }
}

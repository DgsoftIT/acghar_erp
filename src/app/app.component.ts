import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './Admin/Component/sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  SidenavComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidenav = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.shouldShowSidenav();
    });
  }

  shouldShowSidenav(): void {
    // Hide sidenav 
    this.showSidenav = !['/login', '/forgot-password', '/reset-password'].includes(this.router.url);
  }
}

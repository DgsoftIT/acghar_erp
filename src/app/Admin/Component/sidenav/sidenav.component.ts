import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isCatalogSubMenuVisible = false;
  isAccessSubMenuVisible = false;

  constructor(private router: Router) {}

  toggleCatalogSubMenu() {
    this.isCatalogSubMenuVisible = !this.isCatalogSubMenuVisible;
    if (this.isCatalogSubMenuVisible) {
      this.isAccessSubMenuVisible = false;
    }
  }

  toggleAccessSubMenu() {
    this.isAccessSubMenuVisible = !this.isAccessSubMenuVisible;
    if (this.isAccessSubMenuVisible) {
      this.isCatalogSubMenuVisible = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.nav-items');
    if (!clickedInside) {
      this.isCatalogSubMenuVisible = false;
      this.isAccessSubMenuVisible = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

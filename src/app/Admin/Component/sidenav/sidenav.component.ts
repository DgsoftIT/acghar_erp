import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

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

  toggleCatalogSubMenu() {
    this.isCatalogSubMenuVisible = !this.isCatalogSubMenuVisible;
    // Optionally close the other submenu
    if (this.isCatalogSubMenuVisible) {
      this.isAccessSubMenuVisible = false;
    }
  }

  toggleAccessSubMenu() {
    this.isAccessSubMenuVisible = !this.isAccessSubMenuVisible;
    // Optionally close the other submenu
    if (this.isAccessSubMenuVisible) {
      this.isCatalogSubMenuVisible = false;
    }
  }

  // Optional: Close submenus when clicking outside the sidebar
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.nav-items');
    if (!clickedInside) {
      this.isCatalogSubMenuVisible = false;
      this.isAccessSubMenuVisible = false;
    }
  }
}
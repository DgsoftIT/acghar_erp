import { Component } from '@angular/core';
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
    
  }

  toggleAccessSubMenu() {
    this.isAccessSubMenuVisible = !this.isAccessSubMenuVisible;
    
  }
}

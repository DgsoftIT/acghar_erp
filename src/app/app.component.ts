import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './Admin/Component/sidenav/sidenav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'acghar';
}

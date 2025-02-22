import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-page',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar-page.component.html',
  styleUrl: './navbar-page.component.css'
})
export class NavbarPageComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPageComponent } from './pages/navbar-page/navbar-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavbarPageComponent,
    FooterPageComponent
  ],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bases de Angular';
}

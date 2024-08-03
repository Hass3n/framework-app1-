import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, AboutComponent, PortfolioComponent, ContactComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1Angular';
}

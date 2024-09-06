import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
   isremove:boolean=true;

  removepadding()
  {


    this.isremove=true;

    console.log('hiii');
    
  }
 

    // HostListener for window scroll event
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event): void {


      if(document.documentElement.scrollTop>0)
      {

        this.isremove=false

      }
      else
      {
        this.isremove=true;
      }
    }
  

}




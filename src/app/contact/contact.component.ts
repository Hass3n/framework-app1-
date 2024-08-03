import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  color:string='#2C3E50';
 
  isfoc:number=-1;
  

  keyboardevent(event:KeyboardEvent,x:number)
  {




 
      if(event.key==='Backspace')
        {
          this.isfoc=-1
        }
    
        else
        {
         this.isfoc=x;
        }
    
    
        
      }

    
   
}

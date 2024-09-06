import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  ishide:boolean=true;
  modelImage :string='';
  img:string='';

  assetimage:string[]=[
    'assets/images/poert1.png',
     'assets/images/port2.png',
      'assets/images/port3.png',
      'assets/images/port2.png',
      'assets/images/poert1.png',
       'assets/images/port2.png'

  ]

  color:string='#2C3E50';

  hideModel(elevent:EventTarget |null,imaghref:HTMLImageElement):void

{

  console.log(elevent);
  console.log(imaghref);
  
  

  if(elevent==imaghref)return ;

  else
  this.ishide=true

}

}

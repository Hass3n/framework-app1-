import { Component } from '@angular/core';
import { Product } from '../interface/products/product';
import { RecommendedComponent } from "../recommended/recommended.component";



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  listProducts:Product[]=[
    {size:'x4',image:'assets/images/4.webp',devicetype:'Laptops',discount:'$1099',deviceName:'HP Notebook',price:'$999',avilableNumber:'6'},
    {size:'x2',image:'assets/images/7.webp',devicetype:'Laptops',discount:'$1086',deviceName:'HP Envy',price:'$1089',avilableNumber:'4'},
    {size:'x3',image:'assets/images/5.webp',devicetype:'Laptops',discount:'$1086',deviceName:'Toshiba B77',price:'$1082',avilableNumber:'5'},
  
    {size:'x4',image:'assets/images/4.webp',devicetype:'Laptops',discount:'$1099',deviceName:'HP Notebook',price:'$999',avilableNumber:'6'},
    {size:'x2',image:'assets/images/7.webp',devicetype:'Laptops',discount:'$1086',deviceName:'HP Envy',price:'$1089',avilableNumber:'4'},
    {size:'x3',image:'assets/images/5.webp',devicetype:'Laptops',discount:'$1086',deviceName:'Toshiba B77',price:'$1082',avilableNumber:'5'},
  
  ];

}

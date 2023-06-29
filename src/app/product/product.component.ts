import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product} from '../product';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing">
  <img class= "listing-photo" *ngIf="product?.name === 'Starlink Installation'" src="/assets/starlink.png" alt="Starlink Installation">
  <img class= "listing-photo" *ngIf="product?.name === 'Wifi Installation'" src="/assets/ap.jpg" alt="Wifi Installation">
  <img class= "listing-photo" *ngIf="product?.name === 'CCTV Installation'" src="/assets/nest.jpg" alt="CCTV Installation">    
  <img class= "listing-photo" *ngIf="product?.name === 'CCTV Doorbell Installation'" src="/assets/doorbell.jpg" alt="CCTV Doorbell Installation">    

  <h2 class="listing-heading">{{ product.name }}</h2>
    <p class="listing-location">{{ product.city}}, {{product.state }}</p>
    <a [routerLink]="['/details', product._id]">Learn More</a>
  </section>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product; 
}

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
    <!-- <img class="listing-photo" [src]="product.photo" alt="Photo of {{product.name}}"> -->
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

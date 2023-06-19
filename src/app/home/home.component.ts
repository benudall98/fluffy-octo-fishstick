import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
  <h1 class="text-center m-5">Products</h1>  
  <section class="results">
    <app-product *ngFor = "let product of productList" [product]="product"></app-product>
  </section>
  `,
  styles: [
  ]
})
export class HomeComponent {
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);

constructor() {
  this.productService.getProducts().subscribe((products) => {
    this.productList = products;
  });
}
}

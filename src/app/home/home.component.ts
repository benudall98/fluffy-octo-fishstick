import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
import { injectable } from 'inversify';

@injectable()
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
  <h1>Products</h1>  
  <section class="results">
    <app-product *ngFor = "let product of productList" [product]="product"></app-product>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productList: Product[] = [];
  productService: ProductService;

constructor(productService: ProductService) {
  this.productService = productService;
  this.productService.getProducts().subscribe((products) => {
    this.productList = products;
  });
}
}

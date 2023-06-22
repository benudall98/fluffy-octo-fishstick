import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
import { AboutComponent } from '../about/about.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  template: `
  <header>
   <nav class="navbar">
     <a *ngFor="let route of routes" [routerLink]="route.path" class="nav-link">{{ route.label }}</a>
   </nav>
 </header>
  <section class="results">
    <app-product *ngFor = "let product of productList" [product]="product"></app-product>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productList: Product[] = [];
  routes = [  
    { path: '/about', label: 'About Us' },
  ];

constructor(private productService: ProductService) { }
 
ngOnInit() {
  this.productService.getProducts()
    .subscribe(products => this.productList = products);
}
};

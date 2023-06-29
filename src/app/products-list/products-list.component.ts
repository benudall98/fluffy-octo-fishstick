import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';


 
@Component({
 selector: 'app-products-list',
 template: `
   <h2 class="text-center m-5">Products List</h2>
 
   <table class="table table-striped table-bordered">
       <thead>
           <tr>
               <th>Name</th>
               <th>City</th>
               <th>State</th>
               <th>Labour</th>
               <th>Description</th>
           </tr>
       </thead>
 
       <tbody>
           <tr *ngFor="let product of products$ | async">
               <td>{{product.name}}</td>
               <td>{{product.city}}</td>
               <td>{{product.state}}</td>
               <td>{{product.labour}}</td>
               <td>{{product.description}}</td>

               <td>
                   <button class="btn btn-primary me-1" [routerLink]="['edit/', product._id]">Edit</button>
                   <button class="btn btn-danger" (click)="deleteProduct(product._id || '')">Delete</button>
               </td>
           </tr>
       </tbody>
   </table>
 
   <button class="btn btn-primary mt-3" [routerLink]="['new']">Add a New Product</button>
 `
})
export class ProductsListComponent implements OnInit {
 products$: Observable<Product[]> = new Observable();
 
 constructor(private productService: ProductService) { }
 
 ngOnInit(): void {
   this.fetchProducts();
 }
 
 deleteProduct(id: string): void {
   this.productService.deleteProduct(id).subscribe({
     next: () => this.fetchProducts()
   });
 }
 
 private fetchProducts(): void {
   this.products$ = this.productService.getProducts();
 }
}
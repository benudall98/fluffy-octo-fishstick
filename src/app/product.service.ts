import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Product } from './product';
 
@Injectable({
 providedIn: 'root'
})
export class ProductService {
 private url = 'http://localhost:5200';
 private products$: Subject<Product[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshProducts() {
   this.httpClient.get<Product[]>(`${this.url}/products`)
     .subscribe(products => {
       this.products$.next(products);
     });
 }
 
 getProducts(): Observable<Product[]> {
   this.refreshProducts();
   return this.products$;
 }
 
 getProduct(id: string): Observable<Product> {
   return this.httpClient.get<Product>(`${this.url}/products/${id}`);
 }
 
 createProduct(product: Product): Observable<string> {
   return this.httpClient.post(`${this.url}/products`, product, { responseType: 'text' });
 }
 
 updateProduct(id: string, product: Product): Observable<string> {
   return this.httpClient.put(`${this.url}/products/${id}`, product, { responseType: 'text' });
 }
 
 deleteProduct(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/products/${id}`, { responseType: 'text' });
 }
}
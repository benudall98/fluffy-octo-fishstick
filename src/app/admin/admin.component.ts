import { Component } from '@angular/core';
 
@Component({
 selector: 'admin',
 template: `
 <header>
   <nav class="navbar">
     <a *ngFor="let route of routes" [routerLink]="route.path" class="nav-link">{{ route.label }}</a>
   </nav>
 </header>
 <div class="content">
   <router-outlet></router-outlet>
 </div>
 `,
 styleUrls: ['./admin.component.css']
 
})
export class AdminComponent { 

  routes = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/products/new', label: 'Add Product' },
    ];
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component'; 
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule,
    HttpClientModule,
    //RouterModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    //Use InversifyExpressServer to bind the container to the application
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      
    });
    const app = server.build();
    
 }
}


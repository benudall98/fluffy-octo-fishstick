import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component'; 
import { EditProductComponent } from './edit-product/edit-product.component'; 
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsListComponent }, 
  { path: 'products/new', component: AddProductComponent }, 
  { path: 'products/edit/:id', component: EditProductComponent }, 
  { path: 'details/:id', component: DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

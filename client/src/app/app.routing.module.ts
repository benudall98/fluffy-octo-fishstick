import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component'; 
import { EditProductComponent } from './edit-product/edit-product.component'; 
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsListComponent }, 
  { path: 'products/new', component: AddProductComponent }, 
  { path: 'products/edit/:id', component: EditProductComponent }, 
  { path: 'details/:id', component: DetailsComponent}, 
  { path: 'admin', component: AdminComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

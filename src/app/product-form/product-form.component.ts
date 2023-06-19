import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Product as Product } from '../product';
 
@Component({
 selector: 'app-product-form',
 template: `
   <form class="product-form" autocomplete="off" [formGroup]="productForm" (ngSubmit)="submitForm()">
    <div class="form-floating mb-3">
      <input class="form-control" type="string" id="id" formControlName="id" placeholder="ID" required>
      <label for="id">ID</label>
    </div>

    <div class="form-floating mb-3">
      <input class="form-control" type="text" id="name" formControlName="name" placeholder="Name" required>
      <label for="name">Name</label>
    </div>

    <div class="form-floating mb-3">
      <input class="form-control" type="text" id="city" formControlName="city" placeholder="City" required>
      <label for="city">City</label>
    </div>

    <div class="form-floating mb-3">
      <input class="form-control" type="text" id="state" formControlName="state" placeholder="State" required>
      <label for="state">State</label>
    </div>

    <div class="form-floating mb-3">
      <input class="form-control" type="number" id="labour" formControlName="labour" placeholder="Labour" required>
      <label for="labour">Labour</label>
    </div>

    <div class="form-floating mb-3">
      <textarea class="form-control" id="description" formControlName="description" placeholder="Description" required></textarea>
      <label for="description">Description</label>
    </div>

    <button class="btn btn-primary" type="submit" [disabled]="productForm.invalid">Add</button>
  </form>
 `,
 styles: [
   `.product-form {
     max-width: 560px;
     margin-left: auto;
     margin-right: auto;
   }`
 ]
})
export class ProductFormComponent implements OnInit {
 @Input()
 initialState: BehaviorSubject<Product> = new BehaviorSubject<Product>({} as Product);
 
 @Output()
 formValuesChanged = new EventEmitter<Product>();
 
 @Output()
 formSubmitted = new EventEmitter<Product>();
 
 productForm: FormGroup = new FormGroup({});
 
 constructor(private fb: FormBuilder) { }
 
 get name() { return this.productForm.get('name')!; }
 get city() { return this.productForm.get('city')!; }
 get state() { return this.productForm.get('state')!; }
 get labour() { return this.productForm.get('labour')!; }
 get description() { return this.productForm.get('description')!; }
 
 ngOnInit() {
   this.initialState.subscribe(product => {
     this.productForm = this.fb.group({
       name: [ product.name, [Validators.required] ],
       city: [ product.city, [ Validators.required, Validators.minLength(5) ] ],
       state: [ product.state, [Validators.required] ],
       labour: [ product.labour, [Validators.required] ],
       description: [ product.description, [Validators.required] ],
     });
   });
 
   this.productForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
 }
 
 submitForm() {
   this.formSubmitted.emit(this.productForm.value);
 }
}
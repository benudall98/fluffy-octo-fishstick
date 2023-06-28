import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { EnquiryService } from '../enquiry.service';
import { inject } from 'inversify';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{product?.name}}</h2>
        <p class="listing-location">{{product?.city}}, {{product?.state}}</p>
        <img class= "listing-photo" *ngIf="product?.name === 'Starlink Installation'" src="/assets/starlink.png" alt="Starlink Installation">
        <img class= "listing-photo" *ngIf="product?.name === 'Wifi Installation'" src="/assets/ap.jpg" alt="Wifi Installation">
        <img class= "listing-photo" *ngIf="product?.name === 'CCTV Installation'" src="/assets/nest.jpg" alt="CCTV Installation">
        <img class= "listing-photo" *ngIf="product?.name === 'CCTV Doorbell Installation'" src="/assets/doorbell.jpg" alt="CCTV Doorbell Installation">
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this product</h2>
        <ul>
          <li>Labour cost: {{product?.labour | currency: '£'}}</li>
          <br>
          <li>Description: {{product?.description}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Submit an enquiry</h2>
        <ng-container *ngIf="!enquirySent; else enquirySentTemplate">
          <form [formGroup]="applyForm" (ngSubmit)="submitEnquiry()">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" formControlName="firstName">
  
            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" formControlName="lastName">
  
            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email">

            <label for="postcode">Property postcode</label>
            <input id="postcode" type="postcode" formControlName="postcode">
            <button type="submit" class="primary">Submit now</button>
          </form>
        </ng-container>
        <ng-template #enquirySentTemplate>  
          <p>Thank you for your enquiry. We will be in touch shortly.</p>
        </ng-template>
      </section>
    </article>
  `,
  styleUrls: ['details.component.css']
})
export class DetailsComponent implements OnInit {

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''), 
    postcode: new FormControl('')
  });

  enquirySent: boolean = false;

  product: Product | undefined;

  constructor(
    @inject(ProductService) private productService: ProductService,
    @inject (EnquiryService) private enquiryService: EnquiryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProduct(productId).subscribe(product => {
      this.product = product;
    });
  }

  submitEnquiry() {
    if (this.applyForm.valid) {
      const enquiryData = {
        ...this.applyForm.value,
        product: this.product?.name, // assuming the product name is unique
      };
      
      this.enquiryService.submitEnquiry(enquiryData).subscribe(
        (res) => {
          if (res.message === 'Created a new product') {
            this.enquirySent = true;
            this.applyForm.reset();
          }
        },
        (error) => {
          console.error('Error occurred:', error);
          // Handle error
        }
      );
    }
  }
  
}

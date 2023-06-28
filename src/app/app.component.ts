import { Component } from '@angular/core';
import { injectable } from 'inversify';

@injectable()
@Component({
 selector: 'app-root',
 template: `
 <main>
 <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
 <div class="content">
   <router-outlet></router-outlet>
 </div>
 <footer class="footer">
        <p>Business Address: Blackheath Park, London</p>
        <p>VAT Number: GB 123 4567 89</p>
      </footer>
</main>
 `, 
 styleUrls: ['./app.component.css']
 
})
export class AppComponent { }
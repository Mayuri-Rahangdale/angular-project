import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('en-IN');
  }
  cartItems: any[] = [];

  onProductAddToCart(product: any) {
    console.log('Product Added to Cart: ' + product.name);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cartItems: any[] = [];

  onProductAddToCart(product: any) {
    console.log('Product Added to Cart: ' + product.name);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  cartItems: any[] = [];

  products = [
    {
      id: 1,
      name: 'Phone X',
      price: 1000,
      description: 'Its a durable phone',
    },
    {
      id: 2,
      name: 'Phone Y',
      price: 2000,
      description: 'Better than phoneX',
    },
    {
      id: 3,
      name: 'Phone Z',
      price: 3000,
      description: 'Best in market',
    },
  ];

  onProductAddToCart(product: any) {
    console.log('Product added to Cart: ' + product.name);

    this.cartItems.push(product);
  }
}

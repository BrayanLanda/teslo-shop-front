import { Component, inject } from '@angular/core';
import { ProductCard } from "../../components/product-card/product-card";
import { Product } from '../../../product/services/product';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  productsService = inject(Product);
  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
        return this.productsService.getProducts()
    }
  })
}

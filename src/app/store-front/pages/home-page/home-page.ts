import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCard } from '../../../product/components/product-card/product-card';
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
    params: () => ({}),
    stream: ({ params }) => {
      return this.productsService.getProducts({});
    },
  });
}

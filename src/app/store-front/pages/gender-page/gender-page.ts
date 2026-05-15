import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../../../product/services/product';
import { ProductCard } from '../../../product/components/product-card/product-card';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css',
})
export class GenderPage {
  route = inject(ActivatedRoute);
  productService = inject(Product);

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  productsResource = rxResource({
    params: () => ({ gender: this.gender() }),
    stream: ({ params }) => {
      return this.productService.getProducts({
        gender: params.gender,
      });
    },
  });
}

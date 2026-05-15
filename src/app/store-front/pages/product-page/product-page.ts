import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../product/services/product';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarousel } from '../../../product/components/product-carousel/product-carousel';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  private activatedRoute = inject(ActivatedRoute);
  productService = inject(Product);

  productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) => {
      return this.productService.getProductBySlug(request.idSlug);
    },
  });
}

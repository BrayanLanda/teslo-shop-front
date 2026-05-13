import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../product/interfaces/product-response.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
}

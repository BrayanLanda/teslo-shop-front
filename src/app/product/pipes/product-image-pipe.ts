import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    const image = value.at(0);

    if (typeof value === 'string') return `${baseUrl}/files/product/${value}`;

    if (!image) return './assets/images/no-image.jpg';

    return `${baseUrl}/files/product/${image}`;
  }
}

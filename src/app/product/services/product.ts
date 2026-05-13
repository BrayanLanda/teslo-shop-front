import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ProductResponse } from '../interfaces/product-response.interface';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);

  getProducts(options: Pagination): Observable<ProductResponse> {
    const { gender = '', limit = 10, offset = 0 } = options;

    return this.http
      .get<ProductResponse>(`${baseUrl}/products`, {
        params: {
          gender,
          limit,
          offset,
        },
      })
      .pipe(
        tap((resp) => {
          console.log(resp);
        }),
      );
  }

  getProductBySlug(idSlug: string): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/products/${idSlug}`);
  }
}

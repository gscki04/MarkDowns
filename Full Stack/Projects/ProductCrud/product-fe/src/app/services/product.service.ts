import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/Product'
import { environment } from '../../env/env'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private beURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Create Product
  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const body = {
      productName: product.name,
      productPrice: product.price
    };
    return this.http.post<Product>(this.beURL, body);
  }

  // Get All Products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.beURL).pipe(
      map(data =>
        data.map(item => ({
          id: item.id,
          name: item.productName,
          price: item.productPrice
        }))
      )
    );
  }

  // Get Product by id
  GetProductById(id: number): Observable<Product> {
    return this.http.get<any>(`${this.beURL}/${id}`).pipe(
      map(item => ({
        id: item.id,
        name: item.productName,
        price: item.productPrice
      }))
    );
  }
  

  // Update existing product by id
  updateProduct(id: number, product: Product): Observable<Product> {
    const body = {
      id: product.id,
      productName: product.name,
      productPrice: product.price
    };
    return this.http.put<Product>(`${this.beURL}/${id}`, body);
  }
  // Delete Product by Id
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.beURL}/${id}`, { responseType: 'text' });
  }
  

}

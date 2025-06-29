import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../constant/constant'; 
import { Product } from '../../pages/models/product.model';
import { Category } from '../../pages/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${Constant.API_END_POINT}${Constant.METHODS.GET_ALL_CATEGORY}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${Constant.API_END_POINT}${Constant.METHODS.GET_ALL_PRODUCTS}`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${Constant.API_END_POINT}${Constant.METHODS.GET_PRODUCT_BY_ID}/${productId}`);
  }

  // Accept FormData instead of Product object
  createProduct(productData: FormData): Observable<Product> {
    return this.http.post<Product>(`${Constant.API_END_POINT}${Constant.METHODS.CREATE_PRODUCT}`, productData);
  }

  // Accept FormData for update as well
  updateProduct(productId: number, productData: FormData): Observable<Product> {
    return this.http.put<Product>(`${Constant.API_END_POINT}${Constant.METHODS.UPDATE_PRODUCT}/${productId}`, productData);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${Constant.API_END_POINT}${Constant.METHODS.DELETE_PRODUCT}/${productId}`);
  }
}

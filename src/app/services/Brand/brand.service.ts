import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../constant/constant';
import { Brand } from '../../pages/models/brand.model'; // <-- Add this line

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${Constant.API_END_POINT}${Constant.METHODS.GET_ALL_BRANDS}`);
  }

  getBrandById(brandId: number): Observable<Brand> {
    return this.http.get<Brand>(`${Constant.API_END_POINT}${Constant.METHODS.GET_BRAND_BY_ID}/${brandId}`);
  }

  createBrand(brand: FormData): Observable<Brand> {
    return this.http.post<Brand>(`${Constant.API_END_POINT}${Constant.METHODS.CREATE_BRAND}`, brand);
  }

  updateBrand(brandId: number, brand: FormData): Observable<Brand> {
    return this.http.put<Brand>(`${Constant.API_END_POINT}${Constant.METHODS.UPDATE_BRAND}/${brandId}`, brand);
  }

  deleteBrand(brandId: number): Observable<any> {
    return this.http.delete<any>(`${Constant.API_END_POINT}${Constant.METHODS.DELETE_BRAND}/${brandId}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../pages/models/category.model';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${Constant.API_END_POINT}${Constant.METHODS.GET_ALL_CATEGORY}`;

  constructor(private http: HttpClient) {}


  createCategory(formData: FormData): Observable<any> {
    return this.http.post<any>(
      `${Constant.API_END_POINT}${Constant.METHODS.CREATE_CATEGORY}`,
      formData
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${Constant.API_END_POINT}${Constant.METHODS.UPDATE_CATEGORY(id)}`,
      category
    );
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(
      `${Constant.API_END_POINT}${Constant.METHODS.DELETE_CATEGORY(id)}`
    );
  }
}  
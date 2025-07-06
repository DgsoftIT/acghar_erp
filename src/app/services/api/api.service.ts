import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; //  backend  URL

  constructor(private http: HttpClient) {}

  //  LOGIN
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  //  GET CATALOG
  getCatalog(): Observable<any> {
    return this.http.get(`${this.baseUrl}/catalog`);
  }

  //  ADD PRODUCT (optional)
  addProduct(productData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(`${this.baseUrl}/products`, productData, { headers });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl='http:localhost:4200/api/users';
  constructor(private http: HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  addUser(user:any): Observable<any>{
    return this.http.post(this.apiUrl, user);
  }
  updateUser(id: number, user: any ): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,user);
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

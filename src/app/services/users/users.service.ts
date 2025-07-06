import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users} from '../../pages/models/Users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8080/api/users'; //  backend URL

  constructor(private http: HttpClient) {}

  // Fetch all users
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  // Get a single user by ID
  getUser(id: string): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  // Create a new user
  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, user);
  }

  // Update an existing user
  updateUser(id: string, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiUrl}/${id}`, user);
  }

  // Delete a user
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}





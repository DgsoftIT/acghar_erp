// src/app/services/privilege.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Privilege } from '../../pages/models/Privilege.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrivilegeService {
  private apiUrl = 'http://localhost:8080/api/privileges'; // Change according to your backend

  constructor(private http: HttpClient) {}

  getPrivileges(): Observable<Privilege[]> {
    return this.http.get<Privilege[]>(this.apiUrl);
  }

  getPrivilegeById(id: number): Observable<Privilege> {
    return this.http.get<Privilege>(`${this.apiUrl}/${id}`);
  }

  addPrivilege(privilege: Privilege): Observable<Privilege> {
    return this.http.post<Privilege>(this.apiUrl, privilege);
  }

  updatePrivilege(id: number, privilege: Privilege): Observable<Privilege> {
    return this.http.put<Privilege>(`${this.apiUrl}/${id}`, privilege);
  }

  deletePrivilege(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

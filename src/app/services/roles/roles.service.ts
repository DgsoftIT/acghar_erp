import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roles } from '../../pages/models/Roles.model'; // no extra quotes


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  // Update the roles array to match the Roles model structure
  private roles: Roles[] = [
    new Roles('1', 'Admin', ['Full access'], 'Full access to all features', 'Active', ''),
    new Roles('2', 'Accountant', ['Finance'], 'Access to finance and reports', 'Active', ''),
    new Roles('3', 'Tech', ['Technical'], 'Access to technical modules', 'Active', ''),
    new Roles('4', 'Sales', ['Sales'], 'Access to sales and CRM', 'Active', '')
  ];

  constructor() { }

  // Get all roles
  getRoles(): Observable<Roles[]> {
    return of(this.roles);
  }

  // Get a role by its ID
  getRoleById(id: string): Observable<Roles | undefined> {
    const role = this.roles.find(r => r.id === id);
    return of(role);
  }

  // Add a new role
  addRoles(role: Roles): void {
    this.roles.push(role);
  }

  // Update an existing role
  updateRoles(updatedRole: Roles): void {
    const index = this.roles.findIndex(r => r.id === updatedRole.id);
    if (index > -1) {
      this.roles[index] = updatedRole;
    }
  }

  // Delete a role by its ID
  deleteRole(id: string): void {
    this.roles = this.roles.filter(r => r.id !== id);
  }
}

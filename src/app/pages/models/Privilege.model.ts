// src/app/models/privilege.model.ts

export class Privilege {
  id: number;
  privilegeTitle: string;
  privileges: string[];

  constructor(id: number, privilegeTitle: string, privileges: string[]) {
    this.id = id;
    this.privilegeTitle = privilegeTitle;
    this.privileges = privileges;
  }
}

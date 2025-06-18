// src/app/models/user.model.ts

export class Users {
    id: string;
    name: string;
    address: string;
    email: string;
    bloodGroup: string;
    panNumber: string;
    phoneNumber: string;
    password: string;
    image: string;
    role: string;
    privileges: string[];
  
    constructor(
      id: string,
      name: string,
      address: string,
      email: string,
      bloodGroup: string,
      panNumber: string,
      phoneNumber: string,
      password: string,
      image: string,
      role: string,
      privileges: string[]
    ) 
    {
      this.id = id;
      this.name = name;
      this.address = address;
      this.email = email;
      this.bloodGroup = bloodGroup;
      this.panNumber = panNumber;
      this.phoneNumber = phoneNumber;
      this.password = password;
      this.image = image;
      this.role = role;
      this.privileges = privileges;
    }
  }
  
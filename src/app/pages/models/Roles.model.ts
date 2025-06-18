export class Roles {
  id: string;
  name: string;
  roles: string[];
  privilege: string;
  status?: string;
  image?: string;

  constructor(
    id: string,
    name: string,
    roles: string[],
    privilege: string,
    status: string = 'Active',
    image: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.roles = roles;
    this.privilege = privilege;
    this.status = status;
    this.image = image;
  }
}

export class UserDetails {
  displayName:string;
  roles: Role[];
}

export enum Role{
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class UserDetails {
  displayName:string;
  roles: Role[];
  username: string
  email: string

}

export enum Role{
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {
  id?: number;
  cedula: string,
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  provider?: string,
  confirmed?: boolean,
  blocked: boolean,
  createdAt: Date,
  updatedAt: Date,
}

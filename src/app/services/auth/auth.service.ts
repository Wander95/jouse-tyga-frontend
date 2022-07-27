import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }
  url = 'http://localhost:1337/api/auth/local'
  
  login( identifier: string,password: string ){
    return this.http.post(this.url,{
      identifier,
      password
    })
  }
  
  register( body: User ){
    return this.http.post<User>(`${this.url}/register`,body)
  }
  
  isAuthenticated(){
    
  }
}

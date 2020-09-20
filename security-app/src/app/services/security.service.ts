import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private URL = 'http://localhost:3000/';
  constructor(private HttpClient : HttpClient) { }

  login (user){
    return this.HttpClient.post<any>(this.URL + 'login',user);
  }

  logout(){
    localStorage.removeItem('token');
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import {map} from 'rxjs/operators';
@Injectable()
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  validateUser(user)
  {
    console.log("qqq");
    
    return this.http.post('http://localhost:3000/auth/v1',user);
  }

  setToken(token : string){
    console.log("setting");
    
    localStorage.setItem('keeptoken',token);

  }

  getToken():string
  {
    console.log("seting"+localStorage.getItem('keeptoken'));
    
    return localStorage.getItem('keeptoken');
  }

  isUserAuthenticated(token:string)
  {
  return this.http.post('http://localhost:3000/auth/v1/isAuthenticated',null,{
  headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
})
.pipe(map(response=>response['isAuthenticated'])).toPromise();
  }
}

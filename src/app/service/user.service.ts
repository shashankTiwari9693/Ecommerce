import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { LoginUser } from '../common/login-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9083/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getUserList():Observable<any>{
    return this.http.get(this.baseUrl)
  
  }

  registerUser(user: User): Observable<any> {
console.log("data aa gaya!!!")
    return this.http.post(`${this.baseUrl}/register`,  JSON.stringify(user),this.httpOptions);
  }

  loginUser(login: LoginUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(login),this.httpOptions);
  }

  getUserByID(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"/"+id)
  }

  deleteUserByID(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id)
  }

  registerUserByAdmin(user: User): Observable<any> {
    console.log("data aa gaya!!!")
        return this.http.post(`${this.baseUrl}/registerByAdmin`,  JSON.stringify(user),this.httpOptions);
      }
}

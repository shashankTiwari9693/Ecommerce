import { Injectable } from '@angular/core';
import { Admin } from '../common/admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }


  loginAdmin(admin: Admin): Observable<any> {
  console.log("Admin"+admin.adminusername)
    return this.http.post(`${this.baseUrl}/admin`, JSON.stringify(admin),this.httpOptions);
  }
}

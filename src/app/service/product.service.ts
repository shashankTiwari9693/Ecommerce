import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl='http://localhost:8094/api/products';
  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  getProductList():Observable<any>{
    return this.httpClient.get(this.baseUrl)
  
  }
  postProduct(data:any):Observable<any>{
    console.log("data aa raha h!!"+data.value)
    return this.httpClient.post(this.baseUrl,JSON.stringify(data),this.httpOptions)
  }

  deleteProductByID(id:any):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id)
  }
  getProductByID(id:any):Observable<any>{
    console.log("ishwor",id)
    return this.httpClient.get(this.baseUrl+"/"+id)
  }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { Iproducts } from '../Models/iproducts';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWitApi {

  constructor(
    private http:HttpClient
  ) { }   //RestFull   url/method get post put patch

  getAllProducts(): Observable<Iproducts[]>{
    // return  this.http.get<Iproducts[]>('http://localhost:3000/products')
    return  this.http.get<Iproducts[]>(`${environment.baseUrl}/products`)

  }
  getPrdById(prd:number):Observable<Iproducts>{
    return this.http.get<Iproducts>(`${environment.baseUrl}/products/${prd}`)
  }
  //query string    http://localhost:3000/products?product=value

  search(value:string):Observable<Iproducts[]>{
    return this.http.get<Iproducts[]>(`${environment.baseUrl}/products?product=${value}`)
  }

    getAllIds():Observable<number[]>{  //[ id:'string" ]
return  this.getAllProducts().pipe(map((prd)=>prd.map((prd2)=>prd2.id)))
    }
  

}

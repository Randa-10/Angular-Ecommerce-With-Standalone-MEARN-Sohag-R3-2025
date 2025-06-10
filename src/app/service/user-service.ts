import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
httpHeadrs={}
  constructor(
    private http:HttpClient
  ) { 

    this.httpHeadrs={headers:new HttpHeaders({
      'Content-Type':'application/json',
      // "Authorization":''
    })}
  }

  addNewUser(newUser:Iuser):Observable<Iuser>{
    // return this.http.post<Iuser>(`http://localhost:3000/users`,newUser,this.httpHeadrs)
    return this.http.post<Iuser>(`${environment.baseUrl}/users`,newUser,this.httpHeadrs)

  }
}

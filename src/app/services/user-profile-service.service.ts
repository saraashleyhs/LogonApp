import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { IUserProfile } from '../interfaces/iuserprofile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {

  constructor(private http:HttpClient) { }

  post(user:any): Observable<any>{
    return this.http.post<any>('https://reqres.in/api/registerUser',user);

  }

}

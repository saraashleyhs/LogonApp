import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/iuser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  currentUser: IUser;
  constructor(private http: HttpClient) {}

  register(user: any): Observable<IUser> {
    return this.http.post<IUser>(
      "https://localhost:44367/api/auth/register",
      user
    );
  }
}

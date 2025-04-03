import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl='http://localhost:8080/cFc/users';

  private http=inject(HttpClient);

  register(user: User): Observable<any>{
    return this.http.post<any>( `${this.baseUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }

  getUserByEmail(email: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/{email}`);
  }

  constructor() { }
}

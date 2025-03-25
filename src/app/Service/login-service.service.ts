import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  email = signal("");
  password = signal("");
  constructor(private readonly httpClient: HttpClient) { }

  login(): Observable<User> {
    const params = new HttpParams()
      .set('email', this.email())
      .set('password', this.password());
      
    return this.httpClient.get<User>('https://localhost:7156/api/User/single', { params });
  }

  Login(inputEmail:string,inputPassword:string)
  {
    this.email.set(inputEmail);
    this.password.set(inputPassword);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { UserInt } from '../interfaces/user-int';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://posb.remicos.com.co:8082/api'

  constructor(private http: HttpClient) { }

  signUp(user:UserInt) {
    return this.http.post<any>(this.URL + '/signup', user)
  }

  signIn(user:UserInt) {
    return this.http.post<any>(this.URL + '/signin', user)
  }
}

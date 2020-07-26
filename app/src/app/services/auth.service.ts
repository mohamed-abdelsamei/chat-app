import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }



  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('token') !== null);

    return localStorage.getItem('token') !== null;
  }

  setToken(token) {
    localStorage.setItem("token", token)
  }
  logout() {
    localStorage.removeItem('token')
  }
}

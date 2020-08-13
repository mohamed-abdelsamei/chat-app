import { Injectable } from '@angular/core';

interface User { _id: string, name: string, username: string }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  user: User;
  constructor() { }



  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally

    let token = localStorage.getItem('token')
    let user = localStorage.getItem('user')
    if (token) this.token = token
    if (user) this.user = JSON.parse(user)
    return token !== null;
  }

  setToken(token) {
    this.token = token
    localStorage.setItem("token", token)
  }
  setUser(user) {
    this.user = user
    localStorage.setItem("user", JSON.stringify(user))
  }
  logout() {
    localStorage.removeItem('token')
    this.token = null;
    this.user = null;
  }
}

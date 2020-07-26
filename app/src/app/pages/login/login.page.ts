import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''
  password: string = ''
  constructor(private api: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log("username", this.username);
    console.log("password", this.password);
    this.api.send('login', { username: this.username, password: this.password })
      .then(res => {
        console.log(res);
        this.authService.setToken(res.token)
        this.router.navigate(["tabs"]);

      })
      .catch(err => {
        console.log(err);

      })
  }
}

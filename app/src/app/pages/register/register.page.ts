import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = ''
  username: string = ''
  password: string = ''
  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  register() {
    this.api.send('register', { name: this.name, username: this.username, password: this.password })
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);

      })
  }

}

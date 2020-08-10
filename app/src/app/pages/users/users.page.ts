import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any = []
  constructor(private chatService: ChatService, private socket: Socket) {
    this.socket.connect()

  }

  ngOnInit() {
    this.socket.emit("getUsers", { msh: "ff" })
    this.socket.fromEvent('users').subscribe(s => {
      console.log(s);
      this.users = s
    })
  }
  unread(user) {
    console.log(user);

  }
}
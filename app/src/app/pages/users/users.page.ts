import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Socket } from 'ngx-socket-io';
import { AuthService } from 'src/app/services/auth.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any = []
  constructor(private chatService: ChatService, private webSocketService: WebsocketService, private authService: AuthService) {

  }

  ngOnInit() {
    this.webSocketService.websocket.emit("getUsers", { msh: "ff" })
    this.webSocketService.websocket.fromEvent('users').subscribe(s => {
      console.log(s);
      this.users = s
    })
  }
  unread(user) {
    console.log(user);
  }

  createRoom(user) {
    let users = [user._id, this.authService.user._id]
    this.webSocketService.websocket.emit("create_room", { users })
  }
}
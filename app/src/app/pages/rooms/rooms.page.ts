import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Socket } from 'ngx-socket-io';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  rooms: any = []
  constructor(private chatService: ChatService, private webSocketService: WebsocketService) {

  }

  ngOnInit() {

    this.webSocketService.websocket.emit('rooms_get')
    this.webSocketService.websocket.fromEvent('rooms_get').subscribe((data: any) => {
      console.log(data);

      this.rooms = data.rooms
    })

    this.webSocketService.websocket.fromEvent('room_changed').subscribe((data: any) => {
      console.log(data);

      if (data.status === 'created') this.rooms.push(data.room)
    })
  }
  unread(user) {
    console.log(user);
  }


}

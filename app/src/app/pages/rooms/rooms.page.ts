import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Socket } from 'ngx-socket-io';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  rooms: any = []
  constructor(private chatService: ChatService, private webSocketService: WebsocketService, private router: Router) {

  }

  ngOnInit() {

    this.webSocketService.websocket.emit('subscriptions_get')
    this.webSocketService.websocket.fromEvent('subscriptions_get').subscribe((data: any) => {
      this.rooms = data.subscriptions
    })

    this.webSocketService.websocket.fromEvent('subscription_changed').subscribe((data: any) => {
      console.log(data);
      if (data.status === 'created') this.rooms.push(data.subscription)
    })
  }
  openRoom(room) {
    this.router.navigate([`/room/${room.rId}`])
  }


}

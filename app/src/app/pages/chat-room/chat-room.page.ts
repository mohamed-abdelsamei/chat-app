import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {
  msg: string = ''
  rId = null;
  messages: any = []
  constructor(private activatedRoute: ActivatedRoute, private webSocketService: WebsocketService) { }

  ngOnInit() {
    this.rId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.rId) {
      this.webSocketService.websocket.emit('messages_get')
      this.webSocketService.websocket.fromEvent('message_get').subscribe((data: any) => {
        this.messages = data.subscriptions
      })

      this.webSocketService.websocket.fromEvent('message_changed').subscribe((data: any) => {
        console.log(data);
        if (data.status === 'created') this.messages.push(data.message)
      })
    }

  }

  send() {
    console.log(this.msg);
    this.webSocketService.websocket.emit("create_message", { msg: this.msg, rId: this.rId })
    this.msg = ""
  }
}
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  websocket: any;
  constructor(private socket: Socket,) {

    this.websocket = socket
    this.websocket.connect();
  }
}

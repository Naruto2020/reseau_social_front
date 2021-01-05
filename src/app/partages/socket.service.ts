import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }


}

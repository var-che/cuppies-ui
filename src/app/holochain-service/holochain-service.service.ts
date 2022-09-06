import { Injectable } from '@angular/core';
import { AppWebsocket, AdminWebsocket } from '@holochain/client';


@Injectable({
  providedIn: 'root'
})
export class HolochainServiceService {
  APP_WS_URL = 'ws://localhost:3345';
  ADMIN_WS_URL = 'ws://localhost:3347';
  appWs: AppWebsocket;
  appWsPromise: Promise<AppWebsocket>;

  constructor() {
    console.log('HolochainService started with constructor')
  }

  async getAppWs(signalHandler?: any): Promise<AppWebsocket> {
    async function connect(){
      this.appWsPromise = AppWebsocket.connect(this.APP_WS_URL, undefined, signalHandler);
      this.appWs = await this.appWsPromise;
      this.appWsPromise = null;
      
      this.appWs.client.socket.addEventListener('close', async() => {
        console.log('App websocket closed, trying to re-open');
        await connect();
        console.log('App websocket reconnected');
      })
    }
    if(this.appWs && this.appWs.client.socket.readyState === this.appWs.client.socket.OPEN) {
      return this.appWs;
    } else if (!this.appWs) {
      // this is called only once
      // on the first call of this function
      await connect();
      // Logic for auto-reconnection.
      setInterval(async() => {
        if(this.appWs.client.socket.readyState === this.appWs.client.socket.OPEN) {
          // Random call to keep the connection open
          this.appWs.appInfo({
            installed_app_id: 'test',
          });
        } else if(
          this.appWs.client.socket.readyState === this.appWs.client.socket.CLOSED
        ){
          // try to reconnect
          await connect();
          console.log('App websocket reconnected');
        }
      }, 60000);

      return this.appWs;
    }
  }
}

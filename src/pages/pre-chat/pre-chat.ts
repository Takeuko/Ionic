import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import {ChatRoomPage} from '../chat-room/chat-room';

/**
 * Generated class for the PreChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-chat',
  templateUrl: 'pre-chat.html',
})
export class PreChatPage {
nickname='';

  constructor(public navCtrl: NavController, public navParams: NavParams, private socket:Socket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreChatPage');
  }
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }

}

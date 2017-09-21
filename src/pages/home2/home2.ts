import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import {ChatRoomPage} from '../chat-room/chat-room';


@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page 
{

	@ViewChild('nombre') nombre;
	public id:string;
	public nom:string;
  public ema:string;
  nickname='';
  constructor(public navCtrl: NavController, public navParams: NavParams, private socket:Socket) 
  {
  	 let id = navParams.get('id');
     this.nom = navParams.get('username');
     let email = navParams.get('email');
     this.nombre = name;
     console.log(this.nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');

  }

  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }


}
/*
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
/*
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

}*/




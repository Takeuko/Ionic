import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page 
{

	@ViewChild('nombre') nombre;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 let id = navParams.get('id');
     let name = navParams.get('username');
     let email = navParams.get('email');
     this.nombre = name.value;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');

  }

}

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
	public id:string;
	public nom:string;
	public ema:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) 
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

  cambiarValor()
  {
  	var a;
  	a++;
  	this.nom=a.value;
  }


}

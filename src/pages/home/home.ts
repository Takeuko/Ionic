import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RegisterPage } from '../register/register'
import 'rxjs/add/operator/map';
import {PreChatPage} from '../pre-chat/pre-chat';
@Component({


  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
	posts:any={};
    data:any={};
	@ViewChild('username') username;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http) 
  {

  }

  Login()
  {

    var datos =
    {
      'usu':this.username.value,
      'pass':this.password.value
    }
    this.http.post('http://localhost/planificador/login.php', datos).subscribe
  (data =>

    {
      this.data.response = data["_body"];

      console.log(data["_body"]);
      if(data["_body"] == '404')
      {

        let alert = this.alertCtrl.create
        ({
              title: 'Usario no existe o es incorrecto',
              subTitle: 'El nombre de usuario no existe regristrese o verifique sus datos',
              buttons: ['OK']
          });

          alert.present();
      }
      

    },
    error => 
    {
      console.log("Ooops!");
    }

  );
  }

  GoToRegister()
  {
     this.navCtrl.push(RegisterPage);
  }

  IraChat()
  {
    this.navCtrl.push(PreChatPage);
  }

}

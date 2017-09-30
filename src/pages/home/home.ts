import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RegisterPage } from '../register/register'
import { Home2Page } from '../home2/home2';
import 'rxjs/add/operator/map';
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
    this.http.post('http://192.168.250.30/planificador/login.php', datos).subscribe
  (data =>

    {
      this.data.response = data["_body"];

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
      else
      {
        /*let alert = this.alertCtrl.create
        ({
              title: 'Login Exitoso',
              subTitle: 'El nombre de usuario no existe regristrese o verifique sus datos',
              buttons: ['OK']
          });

        alert.present();*/
        var ServerJson = JSON.parse(data["_body"]);
        var json =
        {
          id: ServerJson['id_miembro'],
          username: ServerJson['nom_usuario'],
          email:ServerJson['email']
        }
        this.navCtrl.setRoot(Home2Page, json);

      }
      

    },
    error => 
    {
         let alert = this.alertCtrl.create
        ({
              title: 'Error',
              subTitle: error,
              buttons: ['OK']
          });

        alert.present();

    }

  );
  }

  GoToRegister()
  {
     this.navCtrl.push(RegisterPage);
  }
}

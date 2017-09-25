import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the ProyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proyectos',
  templateUrl: 'proyectos.html',
})
export class ProyectosPage 
{

  public cant_proyectos;
  public id;
  public json;
  data:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http,public alertCtrl: AlertController) 
  {
    this.id = navParams.get('id');
  }

  

  ionViewDidLoad() 
  {
    var datos =
    {
      'id':this.id
    }
    this.http.post('http://192.168.250.13/planificador/proyecto.php', datos).subscribe
  (data =>

    {
      this.data.response = data["_body"];

        let alert = this.alertCtrl.create
        ({
              title: 'Cantidad de proyectos:',
              subTitle: data["_body"],
              buttons: ['OK']
          });

          alert.present();
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
}
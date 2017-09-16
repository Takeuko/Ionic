import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController,  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Http } from '@angular/http';
import { PasswordValidator } from '../../validators/password';
@Component({
  selector: 'page-home',
  templateUrl: 'register.html'
})
 export class RegisterPage 
{
	data:any={};
	Registro : FormGroup;
	@ViewChild('email') email;
	@ViewChild('password2') password2;
	@ViewChild('username') username;
	@ViewChild('password') password;
	@ViewChild('nombre') nombre;
	@ViewChild('apellido') apellido;
	@ViewChild('telefono') telefono;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: Http, public FB : FormBuilder) 
  {
  	this.Registro=this.createMyForm();


  }

  public DOtro()
  {
  	return this.password.value;
  }

  private createMyForm()
  {
	  return this.FB.group
	  ({
	    nombre: ['', [Validators.minLength(2), Validators.required]],
	    apellido: ['', Validators.required],
	    usuario: ['', Validators.required],
	    email: ['', Validators.email],
	    telefono: ['', Validators.required],
	    password: ['', Validators.minLength(8)],
	    passwordConfirmation: ['', Validators.required]
	   })
  }

public ValidarPass()
	{
		if(this.password.value===this.password2.value)
			return true;
		else return false;
	}

  Registrar()
  {
 	var datos = 
  	{
  		'usu' : this.username.value,
  		'pass' : this.password.value,
  		'email': this.email.value,
  		'nombre': this.nombre.value,
  		'apellido': this.apellido.value,
  		'telefono':this.telefono.value
  	}
	// for (var i in datos) 
	// console.log(datos[i])
	
	
   	
   	if(!this.Registro.valid)
   	{
   		let alert = this.alertCtrl.create
				({
      				title: 'Campo invalido',
      				subTitle: 'Se encontraron uno o varios campos invalidos',
      				buttons: ['OK']
    			});

    			alert.present();
   		return;
   	}
  	
  	if(!this.ValidarPass())
  	{
  		let alert = this.alertCtrl.create
				({
      				title: 'Contraseña',
      				subTitle: 'Las contraseñas no coinciden',
      				buttons: ['OK']
    			});

    			alert.present();
    	return;
  	}  

    
	this.http.post('http://192.168.250.13/planificador/registro.php', datos).subscribe
	(data =>

		{
			this.data.response = data["_body"];
			if(data["_body"] == '200')
			{
				let alert = this.alertCtrl.create
				({
      				title: 'Usario o Email existe',
      				subTitle: 'El nombre de usuario o email que ingresaste ya existe, por favor intenta de nuevo',
      				buttons: ['OK']
    			});

    			alert.present();
			}
			else if(data["_body"] == '100')
			{
				let alert = this.alertCtrl.create
				({
      				title: 'Registro Exitoso',
      				subTitle: 'Has sido registrado correctamente, ahora puedes disfrutar de nuestros servicios',
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
}

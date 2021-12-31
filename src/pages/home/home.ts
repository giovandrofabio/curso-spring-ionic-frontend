import { CredenciaisDto } from './../../models/credenciais.dto';
import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDto = {
    email : "",
    senha : ""
  };

  constructor(
      public navCtrl: NavController,
      public menu: MenuController,
      public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      console.log(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {});
  }
}

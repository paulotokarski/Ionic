import { Component } from '@angular/core';
import { UserModel } from '../../models/User';
import { AlbumsPage } from '../albums/albums';
import { ApiService } from '../../services/ApiService';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {

  private users: UserModel[] = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public apiService: ApiService) {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers()
      .then(users => {
        for(var cont = 0; cont < users.length; cont++)
          this.users.push(users[cont])
      })
  }

  openPage(user: UserModel) {
    this.navCtrl.push(AlbumsPage, { 'user': user });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.users = [];
      this.getUsers();
      refresher.complete();
    }, 2000);
  }

}
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AlbumsPage } from '../albums/albums';
import { ApiService } from '../../services/ApiService';  

import { UserModel } from '../../models/User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {

  private users: UserModel;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public apiService: ApiService) {
    this.apiGet();
  }

  apiGet() {
    this.apiService.getUsers()
      .then(users => {
        this.users = users
      })
  }

  openPage(user: UserModel) {
    this.navCtrl.push(AlbumsPage, { 'user': user });
  }

}

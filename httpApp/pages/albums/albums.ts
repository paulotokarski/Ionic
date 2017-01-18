import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PhotosPage } from '../photos/photos';
import { ApiService } from '../../services/ApiService';

import { UserModel } from '../../models/User';

@Component({
    templateUrl: 'albums.html',
    providers: [ApiService]
})
export class AlbumsPage {

  private user: UserModel;
  private albums: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService) {
      this.user = new UserModel();
      this.user.setId(this.navParams.data.user.id);
      this.user.setName(this.navParams.data.user.name);
      this.user.setUsername(this.navParams.data.user.username);
      
      this.getAlbums(this.user.getId());
  }

  getAlbums(id: number) {
    this.apiService.getUserAlbums(id)
        .then(albums => {
            this.albums = albums
        })
  }

  openPhotos(id: any, user: UserModel) {
    this.navCtrl.push(PhotosPage, { 'albumId': id, 'user': user });
  }
}

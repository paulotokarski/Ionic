import { Component } from '@angular/core';
import { PhotosPage } from '../photos/photos';
import { UserModel } from '../../models/User';
import { AlbumModel } from '../../models/Album';
import { ApiService } from '../../services/ApiService';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'albums.html',
    providers: [ApiService]
})

export class AlbumsPage {

  private user: UserModel;
  private albums: AlbumModel[] = [];

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
          for(var cont = 0; cont < albums.length; cont++)
            this.albums.push(albums[cont])
        })
  }

  openPhotos(id: any, user: UserModel) {
    this.navCtrl.push(PhotosPage, { 'albumId': id, 'user': user });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.albums = [];
      this.getAlbums(this.user.getId());
      refresher.complete();
    }, 2000);
  }
  
}
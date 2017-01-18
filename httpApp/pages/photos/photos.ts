import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { PhotoPage } from '../photo/photo'; 
import { ApiService } from '../../services/ApiService';

import { UserModel } from '../../models/User';

@Component({
    templateUrl: 'photos.html',
    providers: [ApiService]
})
export class PhotosPage {

  private albumId: any;
  private user: UserModel;
  private photos: any = [];

  constructor(public modalCtrl: ModalController ,  public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService) {
    this.user = new UserModel();
    this.albumId = this.navParams.data.albumId;
    this.user.setId(this.navParams.data.user.id);
    this.user.setName(this.navParams.data.user.name);
    this.user.setUsername(this.navParams.data.user.username);

    this.getAlbumPhotos(this.albumId);
  }

  getAlbumPhotos(id: any) {
    this.apiService.getUserAlbumPhotos(id)
        .then(photos => {
            this.photos = photos
        })
  }

  showPhoto(photo) {
    let modal = this.modalCtrl.create(PhotoPage, { 'photo': photo });
    modal.present();
  }

}

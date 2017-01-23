import { Component } from '@angular/core';
import { PhotoPage } from '../photo/photo'; 
import { UserModel } from '../../models/User';
import { PhotoModel } from '../../models/Photo';
import { ApiService } from '../../services/ApiService';
import { ModalController, NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'photos.html',
    providers: [ApiService]
})
export class PhotosPage {

  private albumId: number;
  private user: UserModel;
  private photos: PhotoModel[] = [];

  constructor(public modalCtrl: ModalController ,  public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService) {
    this.user = new UserModel();
    this.albumId = this.navParams.data.albumId;
    this.user.setId(this.navParams.data.user.id);
    this.user.setName(this.navParams.data.user.name);
    this.user.setUsername(this.navParams.data.user.username);

    this.getAlbumPhotos(this.albumId);
  }

  getAlbumPhotos(id: number) {
    this.apiService.getUserAlbumPhotos(id)
        .then(photos => {
          for(var cont = 0; cont < photos.length; cont++)
            this.photos.push(photos[cont])
        })
  }

  openPhoto(photo) {
    let modal = this.modalCtrl.create(PhotoPage, { 'photo': photo });
    modal.present()
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.photos = [];
      this.getAlbumPhotos(this.albumId);
      refresher.complete();
    }, 2000);
  }

}

import { Component } from '@angular/core';
import { PhotoModel } from '../../models/Photo';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'photo.html'
})
export class PhotoPage {

  private photo: PhotoModel;
  private photoUrl: any;
  private photoTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.photo = new PhotoModel();
    this.photo.setId(this.navParams.data.photo.id);
    this.photo.setUrl(this.navParams.data.photo.url);
    this.photo.setTitle(this.navParams.data.photo.title);
    this.photo.setAlbumId(this.navParams.data.photo.albumId);
    this.photo.setThumbnailUrl(this.navParams.data.photo.thumbnailUrl);

    this.photoUrl = this.photo.getUrl();
    this.photoTitle = this.photo.getTitle()
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'photo.html'
})
export class PhotoPage {

  private photoUrl: string;
  private photoTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.photoUrl = this.navParams.data.photo.url;
    this.photoTitle = this.navParams.data.photo.title;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage = HomePage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString('#F4F4F4');
      Splashscreen.hide();
    });
  }
}

import { Component } from '@angular/core';
import { Flashlight } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private repeat;
  private freq: number = 0;
  private isAvailable: any;
  private stateFlashlight: any = false;

  constructor(public navCtrl: NavController) {
    this.checkFlashlight();
  }

  checkFlashlight() {
   typeof Flashlight.available()
    .then((res) => {
      if(res === true) this.isAvailable = true
      else this.isAvailable = false
    })
  }

  switchFlashlight(freq) {
    this.freq = freq;
    clearInterval(this.repeat);
    if(this.freq > 0)
      this.blinkFlashlight(this.freq)
    else {
      if(this.stateFlashlight == false) {
        Flashlight.switchOn();
        this.stateFlashlight = true
      } else {
        Flashlight.switchOff();
        this.stateFlashlight = false
      }
    }
  }

  blink(freq: number) {
    Flashlight.switchOff();
    setTimeout(() => {
      Flashlight.switchOn();
    }, (1000 - (freq*100)));
  }

  blinkFlashlight(freq: number) {
    this.repeat = setInterval(() => { this.blink(freq) }, (2000 - (freq*100)));
  }

}
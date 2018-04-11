import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { EmailPage } from '../email/email';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  			  private callNumber: CallNumber) {

  }

  makeCall(){
  	this.callNumber.callNumber("1234566", true)
  		.then(() => console.log('Launched dialer!'))
  		.catch(() => console.log('Error launching dialer'));
  	}

  	email(){
this.navCtrl.push(EmailPage);
  	}
}

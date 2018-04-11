import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage} from '@ionic/storage';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
	isUserLogin: boolean ;
  constructor(public navCtrl: NavController, 
  		      public navParams: NavParams,
  		      private storage:Storage) {
  			  	this.storage.get('isUser').then((data) => {
        			if(data != null){
          				this.navCtrl.setRoot(HomePage);
       			 	}else{
	       			 	this.navCtrl.setRoot(LoginPage);	
       			 	}
    		  	},err =>{
    				this.navCtrl.setRoot(LoginPage);	  			
    		  	});

  			  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}

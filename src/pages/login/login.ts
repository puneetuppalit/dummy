import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Storage} from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginCredentials = {email: '', password: '', name: '', mobile: ''};
  isCheck = false;
  nextStep = false;
  constructor(private alertCtrl: AlertController,
  			  private storage: Storage,
  			  public navCtrl: NavController, 
  			  public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.isCheck = true;
    this.nextStep = true;
    if (this.loginCredentials.email.trim() === "" && this.loginCredentials.password.trim() === "" && this.loginCredentials.name.trim() === "" && this.loginCredentials.mobile.trim() === "") {
      this.showError("Please enter login details", "Error");
      this.nextStep = false;
      this.isCheck = false;
    }
    if (this.nextStep && this.loginCredentials.email.trim() === "") {
      this.showError("Please enter Email", "Error");
      this.nextStep = false;
      this.isCheck = false;
    }
    if (this.nextStep && this.loginCredentials.password.trim() === "") {
      this.showError("Please enter password", "Error");
      this.nextStep = false;
      this.isCheck = false
    }
    if (this.nextStep && this.loginCredentials.name.trim() === "") {
      this.showError("Please enter Name", "Error");
      this.nextStep = false;
      this.isCheck = false
    }
    if (this.nextStep && this.loginCredentials.mobile.trim() === "") {
      this.showError("Please enter mobile", "Error");
      this.nextStep = false;
      this.isCheck = false
    }
    if (this.isCheck) {
      this.storage.set("password", this.loginCredentials.password);
      this.storage.set("email", this.loginCredentials.email);
      this.storage.set("name",this.loginCredentials.name);
      this.storage.set("mobile",this.loginCredentials.mobile);
      this.storage.set("isUser", true);
      
      this.navCtrl.setRoot(HomePage);
    }
  }

  showError(text, title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}

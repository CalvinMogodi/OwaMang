import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.page.html',
  styleUrls: ['./account-verification.page.scss'],
})
export class AccountVerificationPage implements OnInit {

  public OTP:any;

  constructor(public navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  onBack() {
    this.modalController.dismiss({
      isCancel: true,
      isAuthenticated: false
    });
  }

  onVerify() {
    this.modalController.dismiss({
      isCancel: true,
      isAuthenticated: true
    });
  }

  otpController(e, number){

  }
}

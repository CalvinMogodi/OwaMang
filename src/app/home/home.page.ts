import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AccountVerificationPage } from '../account-verification/account-verification.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public password: string = '';
  public username: string = '';

  constructor(public navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  async onInsurance() {
    const modal = await this.modalController.create({
      component: AccountVerificationPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.61,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data.isAuthenticated){      
      this.navigate();
    }
  }

  onLogin(){
    if(this.username){
      if(this.username.toLocaleLowerCase().trim() == "farmer"
      || this.username.toLocaleLowerCase().trim() == "capturer"
      || this.username.toLocaleLowerCase().trim() == "admin"
      || this.username.toLocaleLowerCase().trim() == "mmc"
      || this.username.toLocaleLowerCase().trim() == "company")
        this.onInsurance();      
    }   
  }

  navigate(){    
    if(this.username){
      if(this.username.toLocaleLowerCase().trim() == "farmer")
        this.navCtrl.navigateRoot(['/farmer']); 
      if(this.username.toLocaleLowerCase().trim() == "capturer")
        this.navCtrl.navigateRoot(['/capturer']); 
      if(this.username.toLocaleLowerCase().trim() == "admin")
        this.navCtrl.navigateRoot(['/admin/approved-live-stock-page']);         
      if(this.username.toLocaleLowerCase().trim() == "mmc")
        this.navCtrl.navigateRoot(['/mmc']);
      if(this.username.toLocaleLowerCase().trim() == "company")
        this.navCtrl.navigateRoot(['/company']);
    }
  }

  goToGuestDashboard(){
    this.navCtrl.navigateRoot(['/guest',{ userRole: 'Guest'}]);   
  }

  goToForgotPassword(){
    this.navCtrl.navigateRoot(['/forgot-password']);   
  }

  goToRegister(){
    this.navCtrl.navigateRoot(['/register']);   
  }

}

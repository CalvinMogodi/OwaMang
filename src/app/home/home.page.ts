import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public password: string = '';
  public username: string = '';

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogin(){
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
    this.navCtrl.navigateRoot(['/guest-dashboard']);   
  }

  goToForgotPassword(){
    this.navCtrl.navigateRoot(['/forgot-password']);   
  }

  goToRegister(){
    this.navCtrl.navigateRoot(['/register']);   
  }

}

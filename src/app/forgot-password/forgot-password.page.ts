import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public firstMsg: string = '';
  public secondMsg: string = '';
  public showMsg: boolean = false;
  public msgColor: string = 'green';
  public showLink: boolean = false;
  public showOPT: boolean = false;
  public showPasswords: boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.showOPT = false;
  }

  onContinue(){

    if(this.showOPT){
      this.showPasswords = true;
      this.firstMsg = '';
    }else{  
      this.showPasswords = false;
    this.showMsg = true;
    this.showLink = false;
    if(this.showMsg){
      this.firstMsg = 'OPT has been sent to your cell number and email';
      this.secondMsg = '';
      this.msgColor = '#92949c';
      this.showOPT = true;
    }else{
      this.firstMsg = 'An error has occured, try again later ';
      this.showOPT = false;
      this.secondMsg = '';
      this.msgColor = '#eb445a';
    }
  }
  }

  goToHome(){
    this.navCtrl.navigateRoot(['/home']); 
  }

  onSubmit(){
    if(this.showPasswords){
      this.firstMsg = 'Password has been successfully updated,';
      this.secondMsg = ' to return to login.';
      this.msgColor = 'green';
      this.showOPT = true;
      this.showLink = true;
    }else{
      this.firstMsg = 'An error has occured, try again later ';
      this.showOPT = false;
      this.secondMsg = '';
      this.msgColor = '#eb445a';
    }
  }

}

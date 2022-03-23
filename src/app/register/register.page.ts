import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from '../brandmarks/brandmarks.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public showMsg: boolean = false;
  public showLink: boolean = false;
  public firstMsg: string = '';
  public secondMsg: string = '';
  public brandmarks: any[] = [];
  constructor(public modalController: ModalController,public navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    this.firstMsg = 'Password has been successfully updated,';
    this.secondMsg = ' to return to login.';
    this.showMsg = true;
    this.showLink = true;
  }

  async showBrandmark(e){     
      const modal = await this.modalController.create({
        component: BrandmarksPage,
        cssClass: 'my-custom-class',
        swipeToClose: true,
      });
      await modal.present();  
      
      const { data } = await modal.onWillDismiss();
      this.brandmarks = data.brandmarks;
  }

  goToHome(){
    this.navCtrl.navigateRoot(['/home']); 
  }

}

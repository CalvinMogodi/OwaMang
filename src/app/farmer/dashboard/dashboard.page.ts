import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, Animation, AnimationController, ModalController } from '@ionic/angular';
import { InsurancePage } from '../insurance/insurance.page';
import { LoanPage } from '../loan/loan.page';
import { LostPage } from '../lost/lost.page';
import { SellPage } from '../sell/sell.page';
import { VisitPage } from '../visit/visit.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('fadeText', { static: true }) fadeText:ElementRef;
  
  constructor(private modalController: ModalController, private animationCtrl: AnimationController,public alertController: AlertController) {
   
   }

  async ngOnInit() {
    
    const text = this.animationCtrl
    .create()
    .addElement(this.fadeText.nativeElement)
    .duration(2000)
    .easing('ease-out')
    .fromTo('opacity', 0, 1)
   .iterations(3)
   .direction('alternate')
   .fromTo('color', '#649173', '#45644f');

    await text.play();

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mark as Lost',
      inputs: [
        // multiline input.
        {
          name: 'Notes',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Enter any notes here...'
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
      });
      await alert.present();
    }
  
  async onStatusConfirm() {
    const modal = await this.modalController.create({
      component: LostPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.4,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async onRequestVisit() {
    const modal = await this.modalController.create({
      component: VisitPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.47,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async onSell() {
    const modal = await this.modalController.create({
      component: SellPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.7,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async onNeedLoan() {
    const modal = await this.modalController.create({
      component: LoanPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.37,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async onInsurance() {
    const modal = await this.modalController.create({
      component: InsurancePage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.7,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}

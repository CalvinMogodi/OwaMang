import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddLivestockPage } from '../add-livestock/add-livestock.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public currentModal:any = null;
  public livestocks: any[] = [];
  public isAdded: boolean = false;
  public date = new Date(Date.now());
  public currentMonth =  this.date.toLocaleString('en-ZA', {month: 'long'}); // {month:'long'}

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 
  async openAddLivestockModal() {
    const modal = await this.modalController.create({
      component: AddLivestockPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    if(data.data){
      this.isAdded = true;
    }
  }
}

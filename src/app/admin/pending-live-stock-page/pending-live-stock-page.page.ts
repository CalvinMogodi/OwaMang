import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AddEditLiveStockPagePage } from '../add-edit-live-stock-page/add-edit-live-stock-page.page';

@Component({
  selector: 'app-pending-live-stock-page',
  templateUrl: './pending-live-stock-page.page.html',
  styleUrls: ['./pending-live-stock-page.page.scss'],
})
export class PendingLiveStockPagePage implements OnInit {
  backgroundcolor: string = 'black'
  approve1: boolean = false;
  approve0: boolean = false;
  reject1: boolean = false;
  reject0: boolean = false;
  isAdded: boolean = false;
  isAdd: boolean = true;
  constructor(public navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  approveLiveStock0(){
    this.approve0 = true;
  }

  rejectStock(){
    this.isAdd = true;
    this.goToAddEditStockPage()
  }

  editStock(){
    this.isAdd = false;
    this.goToAddEditStockPage()
  }

  async goToAddEditStockPage(){
    const modal = await this.modalController.create({
      component: AddEditLiveStockPagePage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps:{  isAdd: this.isAdd}
    });
    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    if(data.data){
      this.isAdded = true;
    } 
  }
}

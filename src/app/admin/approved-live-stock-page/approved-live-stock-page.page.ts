import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddEditLiveStockPagePage } from '../add-edit-live-stock-page/add-edit-live-stock-page.page';

@Component({
  selector: 'app-approved-live-stock-page',
  templateUrl: './approved-live-stock-page.page.html',
  styleUrls: ['./approved-live-stock-page.page.scss'],
})
export class ApprovedLiveStockPagePage implements OnInit {
  backgroundcolor: string = 'black'
  isDead0: boolean = false;
  isDead1: boolean = true;
  isAdded: boolean = false;
  isAdd: boolean = true;
  constructor(public navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  editStock(){
    this.isAdd = false;
    this.goToAddEditStockPage()
  }

  addStock(){
    this.isAdd = true;
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

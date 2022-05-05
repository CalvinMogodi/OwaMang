import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.page.html',
  styleUrls: ['./lost.page.scss'],
})
export class LostPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onColse(){
    this.modalController.dismiss({
      isCancel: true,
      //brandmarks: this.selectBrandmarks
    });
  }

  onSave(){
    this.modalController.dismiss({
      isCancel: false,
      //brandmarks: this.selectBrandmarks
    });
  }

}

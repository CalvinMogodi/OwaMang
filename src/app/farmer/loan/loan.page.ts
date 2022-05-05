import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

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

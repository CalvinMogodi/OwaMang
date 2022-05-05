import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {

  public total: number = 0;
  public sold: boolean = false;
  public sold1: boolean = false;

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
  
  addTotal(){
    this.total = this.total + Number('18569.32');
  }

  minusTotal(){
    this.total = this.total - Number('18569.32');
  }

}

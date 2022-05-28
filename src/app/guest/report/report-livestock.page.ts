import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-report-livestock',
  templateUrl: './report-livestock.page.html',
  styleUrls: ['./report-livestock.page.scss'],
})
export class ReportLivestockPage implements OnInit {
  public dateValue: any = new Date().toLocaleDateString();
  public datePipe = new DatePipe('en-ZA');
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.dateValue = this.datePipe.transform(new Date(), 'dd MMMM yyyy');  
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

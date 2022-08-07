import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MockDataService } from '../services/data'
import { element } from 'protractor';

@Component({
  selector: 'app-brandmarks',
  templateUrl: './brandmarks.page.html',
  styleUrls: ['./brandmarks.page.scss'],
})
export class BrandmarksPage implements OnInit {
  public selectBrandmarks: any = [];
  
  public brandmarks = [];
  
  constructor(private modalController: ModalController, private mockDataService: MockDataService) { 
    this.brandmarks = mockDataService.getAllBrandmark();
  }

  ngOnInit() {
  }

  onBrandmarkSelect(brandmark){
    if(this.selectBrandmarks.length < 18)
    this.selectBrandmarks.push(brandmark);
  }

  onRremoveBrandmark(){
    if(this.selectBrandmarks.length > 0){
      const index = this.selectBrandmarks.length - 1;
      this.selectBrandmarks.splice(index, 1);
    }   
  }

  onConfirm() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      isCancel: false,
      brandmarks: this.selectBrandmarks
    });
  }

  onCancel(){
    this.modalController.dismiss({
      isCancel: true,
      brandmarks: this.selectBrandmarks
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onBack(){
    this.modalController.dismiss({
      isCancel: true,
      animal:  undefined
    });
  }

}

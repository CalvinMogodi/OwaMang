import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-brandmarks',
  templateUrl: './brandmarks.page.html',
  styleUrls: ['./brandmarks.page.scss'],
})
export class BrandmarksPage implements OnInit {
  public selectBrandmarks: any = [];
  
  public brandmarks: any = [{class: 'north', htmlCode: "&#65;", element: '<span class="north">&#65;</span>'},
  {class: 'east', htmlCode: '&#65;', element: '<span class="east">&#65;</span>'},
  {class: 'south', htmlCode: '&#65;', element: '<span class="south">&#65;</span>'},
  {class: 'west', htmlCode: '&#65;', element: '<span class="west">&#65;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#66;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#66;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#66;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#66;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#67;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#67;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#67;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#67;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#68;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#68;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#68;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#68;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#69;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#69;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#69;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#69;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#70;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#70;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#70;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#70;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#71;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#71;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#71;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#71;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#72;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#72;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#72;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#72;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#73;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#73;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#73;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#73;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#74;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#74;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#74;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#74;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#75;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#75;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#75;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#75;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#76;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#76;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#76;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#76;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#77;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#77;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#77;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#77;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#78;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#78;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#78;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#78;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#79;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#79;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#79;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#79;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#80;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#80;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#80;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#80;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#81;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#81;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#81;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#81;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#82;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#82;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#82;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#82;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#83;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#83;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#83;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#83;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#84;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#84;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#84;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#84;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#85;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#85;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#85;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#85;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#86;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#86;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#86;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#86;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#87;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#87;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#87;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#87;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#88;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#88;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#88;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#88;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#89;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#89;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#89;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#89;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#90;</span>'},
  {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#90;</span>'},
  {class: 'north', htmlCode: "&#66;", element: '<span class="north">&#36;</span>'},
  {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#36;</span>'},
  {class: 'south', htmlCode: '&#66;', element: '<span class="south">&#650;</span>'},
  {class: 'north', htmlCode: "&#91;", element: '<span class="north">&#91;</span>'},
  {class: 'north', htmlCode: "&#93;", element: '<span class="north">&#93;</span>'},
  {class: 'east', htmlCode: "&#8872;", element: '<span class="east">&#8872;</span>'},
  {class: 'north', htmlCode: "&#163;", element: '<span class="north">&#163;</span>'},
  {class: 'north', htmlCode: "&#8710;", element: '<span class="north">&#8710;</span>'},
  {class: 'north', htmlCode: "&#9826;", element: '<span class="north">&#9826;</span>'},
  {class: 'east', htmlCode: "&#93;", element: '<span class="east"> &#93;</span>'},
  {class: 'west', htmlCode: "&#93;", element: '<span class="west">&#93;</span>'},
  {class: 'north', htmlCode: "&#8743;", element: '<span class="north">&#8743;</span>'},
  {class: 'north', htmlCode: "&#8744;", element: '<span class="north">&#8744;</span>'},
  {class: 'east', htmlCode: "&#40;", element: '<span class="east">&#40;</span>'},
  {class: 'west', htmlCode: "&#40;", element: '<span class="wast">&#40;</span>'},
  {class: 'north', htmlCode: "&#43;", element: '<span class="north">&#43;</span>'},
  {class: 'north', htmlCode: "&#8722;", element: '<span class="north">&#8722;</span>'},
  {class: 'north', htmlCode: "&#9825;", element: '<span class="north">&#9825;</span>'},
  {class: 'east', htmlCode: '&#9825;', element: '<span class="east">&#9825;</span>'},
  {class: 'south', htmlCode: '&#9825;', element: '<span class="south">&#9825;</span>'},
  {class: 'west', htmlCode: '&#9825;', element: '<span class="west">&#9825;</span>'},
  {class: 'north', htmlCode: "&#9831;", element: '<span class="north">&#9831;</span>'},
  {class: 'east', htmlCode: '&#9831;', element: '<span class="east">&#9831;</span>'},
  {class: 'south', htmlCode: '&#9831;', element: '<span class="south">&#9831;</span>'},
  {class: 'west', htmlCode: '&#9831;', element: '<span class="west">&#9831;</span>'},
  {class: 'north', htmlCode: "&#8635;", element: '<span class="north">&#8635;</span>'},
  {class: 'east', htmlCode: '&#8635;', element: '<span class="east">&#8635;</span>'},
  {class: 'south', htmlCode: '&#8635;', element: '<span class="south">&#8635;</span>'},
  {class: 'west', htmlCode: '&#8635;', element: '<span class="west">&#8635;</span>'},
  {class: 'north', htmlCode: "&#8954;", element: '<span class="north">&#8954;</span>'},
  {class: 'east', htmlCode: '&#8954;', element: '<span class="east">&#8954;</span>'},
  {class: 'south', htmlCode: '&#8954;', element: '<span class="south">&#8954;</span>'},
  {class: 'west', htmlCode: '&#8954;', element: '<span class="west">&#8954;</span>'},
  {class: 'west', htmlCode: '&#x2141;', element: '<span class="west">&#x2141;</span>'},
  {class: 'north', htmlCode: '&#8317;', element: '<span class="north">&#8317;</span>'},
  {class: 'north', htmlCode: '&#8318;', element: '<span class="north">&#8318;</span>'},
  {class: 'north', htmlCode: '0', element: '<span class="north">0</span>'},
  {class: 'north', htmlCode: '1', element: '<span class="north">1</span>'},
  {class: 'north', htmlCode: '2', element: '<span class="north">2</span>'},
  {class: 'north', htmlCode: '3', element: '<span class="north">3</span>'},
  {class: 'north', htmlCode: '4', element: '<span class="north">4</span>'},
  {class: 'north', htmlCode: '5', element: '<span class="north">5</span>'},
  {class: 'north', htmlCode: '6', element: '<span class="north">6</span>'},
  {class: 'north', htmlCode: '7', element: '<span class="north">7</span>'},
  {class: 'north', htmlCode: '8', element: '<span class="north">8</span>'},
  {class: 'north', htmlCode: '9', element: '<span class="north">9</span>'},
  ]
  
  constructor(private modalController: ModalController) { }

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

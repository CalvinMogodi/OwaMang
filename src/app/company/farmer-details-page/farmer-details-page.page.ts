import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-farmer-details-page',
  templateUrl: './farmer-details-page.page.html',
  styleUrls: ['./farmer-details-page.page.scss'],
})
export class FarmerDetailsPagePage implements OnInit {
  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;
  public reserveAmount:number = 0;
  public isFromCompany:boolean = false;
  public reserveText:string = "RESERVE"
  private lineChart: Chart;

  constructor(public alertController: AlertController, public navCtrl: NavController,private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.isFromCompany = JSON.parse(params["isFromCompany"]);
      if(this.isFromCompany)
        this.reserveText = "UN-RESERVE";
  });

  }

  ngOnInit() {
    const options = {
      //animation,
      plugins: {        
        legend: {
          display: true
        },
        tooltips: {
          enabled: true,
        },
      },     
      labels: {
        color: '#fff'
      },
      cutout: 160,
      responsive: true,
      
      stacked: false,
      scales: {
        x: {
          
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }     
        }
      }    
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      options: options,
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sold',
          data: [25, 318, 510, 669, 69, 75, 10, 17, 121, 1000, 155, 250],
          backgroundColor: '#d33d51', // array should have same number of elements as number of dataset
          borderColor: '#eb445a',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Died',
          data: [25, 5, 510, 35, 69, 75, 710, 17, 21, 100, 1155, 20],
          backgroundColor: '#2dd36f', // array should have same number of elements as number of dataset
          borderColor: '#28bd63',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Weak',
          data: [343, 225, 510, 232, 323, 323, 710, 17, 323, 100, 115, 45],
          backgroundColor: '#ffc409', // array should have same number of elements as number of dataset
          borderColor: '#e5b008',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
    });
  }

  onBack(){
    if(this.isFromCompany)
      this.onCancel()
    else
      this.navCtrl.navigateRoot(['/farmers-result']);
  }

  onCancel(){
    this.navCtrl.navigateRoot(['/company']);
  }

  onReserve(){
    const reserve = !this.isFromCompany ? 'reserve' : 'un-reserve';
    const header = !this.isFromCompany ? 'Reserve Funds' : 'Un-Reserve Funds';
    this.alertController.create({
      header: header,
      message: 'Are you sure? you want to '+ reserve + ' R'+ this.reserveAmount +' for Rudolf Steiner?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        },
        {
          text: 'Yes!',
          handler: () => {
            this.navCtrl.navigateRoot(['/company']);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}

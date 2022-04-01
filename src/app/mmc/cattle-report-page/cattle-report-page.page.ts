import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-cattle-report-page',
  templateUrl: './cattle-report-page.page.html',
  styleUrls: ['./cattle-report-page.page.scss'],
})
export class CattleReportPagePage implements OnInit {
  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  public total:number = 130;
  private barChart: Chart;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / 12;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
      //tension: {
        duration: 1000,
        type: 'linear',
        from: 1,
        to: 0,
       loop: true
      //}
    };

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

    this.barChart = new Chart(this.barCanvas.nativeElement, {
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

  goBack(){
    this.navCtrl.navigateRoot(['/mmc-dashboard-page']);
  }

}

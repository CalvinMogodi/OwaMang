import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-log-report-page',
  templateUrl: './log-report-page.page.html',
  styleUrls: ['./log-report-page.page.scss'],
})
export class LogReportPagePage implements OnInit {
  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  public total: number = 130;
  private barChart: Chart;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / 12;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      }
    };

    const options = {
      //animation,
      interaction: {
        intersect: false
      },
      elements: {
        line: {
          fill: false,
          backgroundColor: this.getLineColor(),
          borderColor: this.getLineColor(),
        },
        /* point: {
           backgroundColor: this.getLineColor(),
           hoverBackgroundColor: this.makeHalfAsOpaque(),
           radius: this.adjustRadiusBasedOnData(),
           pointStyle: this.alternatePointStyles(),
           hoverRadius: 15,
         }*/
      },
      plugins: {
        legend: {
          display: false
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
      type: 'bar' as ChartType,
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'New records per month',
          data: [25, 318, 510, 669, 69, 75, 10, 17, 121, 1000, 155, 250],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
    });
  }

  getLineColor() {
    return '#000000'
  }

  alternatePointStyles() {
    return 4 % 2 === 0 ? 'circle' : 'rect';
  }

  makeHalfAsOpaque() {
    return;
  }

  adjustRadiusBasedOnData() {
    const v = 2;
    return v < 10 ? 5
      : v < 25 ? 7
        : v < 50 ? 9
          : v < 75 ? 11
            : 15;
  }
  goBack() {
    this.navCtrl.navigateRoot(['/mmc-dashboard-page']);
  }
}

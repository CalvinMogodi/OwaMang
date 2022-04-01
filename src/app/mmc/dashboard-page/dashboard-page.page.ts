import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {
  @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas: ElementRef;

  private doughnutChart: Chart;
  public regionsTotal: number = 145248;
  public recordsTotal: number = 55241;
  public livestockTotal: number = 925248;
  public total: number = 11254757

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    const Options = {
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
      elements: {
        arc: {
          borderWidth: 0.2, // <-- Set this to derired value
          borderColor: '#fff'
        }
      }
    }

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      options: Options,
      data: {
        labels: ["Regions", "Records", "Livestock"],
        datasets: [
          {
            label: "# of Votes",
            data: [151174, 251174, 1174142],
            backgroundColor: [
              "#eb445a",
              "#2dd36f",
              "#ffc409",
            ],
            hoverBackgroundColor: ["#d33d51", "#28bd63", "#e5b008"]
          }
        ]
      }
    });
  }

  goToLogsReport(){
    this.navCtrl.navigateRoot(['/log-report-page']); 
  }

  goToRegionReport(){
    this.navCtrl.navigateRoot(['/region-report-page']); 
  }

  goToCattleReport(){
    this.navCtrl.navigateRoot(['/cattle-report-page']); 
  }

}

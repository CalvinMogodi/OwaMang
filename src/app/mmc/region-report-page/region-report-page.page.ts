import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-region-report-page',
  templateUrl: './region-report-page.page.html',
  styleUrls: ['./region-report-page.page.scss'],
})
export class RegionReportPagePage implements OnInit {
  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  public total: number = 130;
  private barChart: Chart;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    const options = {
      interaction: {
        intersect: false
      },
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
      cutout: 100,
      responsive: true,
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      options: options,
      type: 'pie',
      data: {
        labels: ["Capricorn: ", "Mopani", "Sekhukhune", "Vhembe", "Waterberg"],
        datasets: [
          {
            label: "# of Votes",
            data: [151174, 251174, 1174142, 442255, 52222],
            backgroundColor: [
              "#eb445a",
              "#2dd36f",
              "#ffc409",
              "#3dc2ff",
              "#5260ff",
            ],
            hoverBackgroundColor: ["#d33d51", "#28bd63", "#e5b008", "#2a87b2", "#3943b2"]
          }
        ]}
    });

  }

  goBack() {
    this.navCtrl.navigateRoot(['/mmc-dashboard-page']);
  }

  goToFarmers() {
    this.navCtrl.navigateRoot(['/region-farmers-page']);
  }

}

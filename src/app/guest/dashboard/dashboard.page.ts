import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public lostAnimals: any[] = [1, 2, 3];
  public report: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.page.html',
  styleUrls: ['./dashbord-page.page.scss'],
})
export class DashbordPagePage implements OnInit {
  activeTab:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}

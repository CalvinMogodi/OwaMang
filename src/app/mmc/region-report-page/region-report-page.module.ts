import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionReportPagePageRoutingModule } from './region-report-page-routing.module';

import { RegionReportPagePage } from './region-report-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionReportPagePageRoutingModule
  ],
  declarations: [RegionReportPagePage]
})
export class RegionReportPagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportLivestockPageRoutingModule } from './report-livestock-routing.module';

import { ReportLivestockPage } from './report-livestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportLivestockPageRoutingModule
  ],
  declarations: [ReportLivestockPage]
})
export class LoanPageModule {}

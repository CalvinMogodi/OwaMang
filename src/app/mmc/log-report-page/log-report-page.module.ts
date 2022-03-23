import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogReportPagePageRoutingModule } from './log-report-page-routing.module';

import { LogReportPagePage } from './log-report-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogReportPagePageRoutingModule
  ],
  declarations: [LogReportPagePage]
})
export class LogReportPagePageModule {}

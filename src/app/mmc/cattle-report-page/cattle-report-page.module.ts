import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CattleReportPagePageRoutingModule } from './cattle-report-page-routing.module';

import { CattleReportPagePage } from './cattle-report-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CattleReportPagePageRoutingModule
  ],
  declarations: [CattleReportPagePage]
})
export class CattleReportPagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditReportPagePageRoutingModule } from './audit-report-page-routing.module';

import { AuditReportPagePage } from './audit-report-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuditReportPagePageRoutingModule
  ],
  declarations: [AuditReportPagePage]
})
export class AuditReportPagePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditReportPagePage } from './audit-report-page.page';

const routes: Routes = [
  {
    path: '',
    component: AuditReportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditReportPagePageRoutingModule {}

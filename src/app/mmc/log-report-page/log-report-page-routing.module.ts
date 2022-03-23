import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogReportPagePage } from './log-report-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogReportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogReportPagePageRoutingModule {}

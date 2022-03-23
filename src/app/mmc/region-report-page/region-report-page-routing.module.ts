import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionReportPagePage } from './region-report-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegionReportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionReportPagePageRoutingModule {}

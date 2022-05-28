import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportLivestockPage } from './report-livestock.page';

const routes: Routes = [
  {
    path: '',
    component: ReportLivestockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportLivestockPageRoutingModule {}

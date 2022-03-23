import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CattleReportPagePage } from './cattle-report-page.page';

const routes: Routes = [
  {
    path: '',
    component: CattleReportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CattleReportPagePageRoutingModule {}

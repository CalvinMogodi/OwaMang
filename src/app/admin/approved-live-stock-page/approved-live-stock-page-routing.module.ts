import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedLiveStockPagePage } from './approved-live-stock-page.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedLiveStockPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedLiveStockPagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingLiveStockPagePage } from './pending-live-stock-page.page';

const routes: Routes = [
  {
    path: '',
    component: PendingLiveStockPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingLiveStockPagePageRoutingModule {}

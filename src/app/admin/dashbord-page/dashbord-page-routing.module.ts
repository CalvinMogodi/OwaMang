import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordPagePage } from './dashbord-page.page';

const routes: Routes = [
  {
    path: '',
    component: DashbordPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordPagePageRoutingModule {}

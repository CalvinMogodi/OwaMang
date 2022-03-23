import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandmarksPage } from './brandmarks.page';

const routes: Routes = [
  {
    path: '',
    component: BrandmarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandmarksPageRoutingModule {}

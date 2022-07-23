import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAnimalPage } from './search-animal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAnimalPageRoutingModule {}

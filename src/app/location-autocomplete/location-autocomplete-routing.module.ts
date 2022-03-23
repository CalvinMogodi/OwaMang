import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationAutocompletePage } from './location-autocomplete.page';

const routes: Routes = [
  {
    path: '',
    component: LocationAutocompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationAutocompletePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default/component';
import { ElementListComponent } from "./modules/element/subject-list/component";

const routes: Routes = [{
  path: '',
  component: DefaultLayoutComponent,
  children: [{
    path: '',
    component: ElementListComponent
  }]
}];

/**
 * Defines possible application routes.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

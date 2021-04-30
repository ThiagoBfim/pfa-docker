import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { MatTableModule } from "@angular/material/table";

import { ElementFormComponent } from "./subject-form/component";
import { ElementListComponent } from "./subject-list/component";

@NgModule({
  declarations: [
    ElementFormComponent,
    ElementListComponent
  ],
  exports: [
    ElementFormComponent,
    ElementListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule
  ]
})
export class ElementModule { }

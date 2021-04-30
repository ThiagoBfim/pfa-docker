import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './component';
import { ElementModule } from "../../modules/element/module";
import { SharedModule } from '../../shared/module';

/**
 * Default layout module.
 */
@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule,
    SharedModule
  ],
})
export class DefaultModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule
  ],
  exports: [
    IncrementadorComponent
  ]
})
export class ComponentsModule { }

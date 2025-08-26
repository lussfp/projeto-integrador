import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { EstruturaRoutingModule } from './estrutura-routing-module';

@NgModule({
  declarations: [
    DiretivaComponent
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule
  ],
  exports: [
    DiretivaComponent
  ]
})
export class EstruturaModule { }
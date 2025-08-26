import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivaComponent } from './diretiva/diretiva.component';

const routes: Routes = [
    { path: '', component: DiretivaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstruturaRoutingModule { }
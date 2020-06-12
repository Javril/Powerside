import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MaterialsModule } from './materials.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MaterialsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    MaterialsModule
  ]
})
export class SharedModule { }

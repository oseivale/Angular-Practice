import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoggyComponent } from './doggy/doggy.component';

@NgModule({
  declarations: [DoggyComponent],
  imports: [
    CommonModule
  ],
  exports: [DoggyComponent]
})
export class DogModule { }

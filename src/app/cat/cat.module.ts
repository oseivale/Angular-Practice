import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponentComponent } from './cat-component/cat-component.component';

@NgModule({
  declarations: [CatComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	CatComponentComponent
  ]
})
export class CatModule { }

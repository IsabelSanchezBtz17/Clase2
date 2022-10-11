import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './components/second/second.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:  [
    SecondComponent
  ]

})
export class SecondModule { }

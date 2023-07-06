import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineComponent } from './cine.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    CineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  exports: [
    CineComponent
  ]
})
export class CineModule { }

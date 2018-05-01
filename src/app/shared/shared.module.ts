import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
  ],
  declarations: []
})
export class SharedModule { }

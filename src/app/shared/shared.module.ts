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
  MatSidenavModule,
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
    ReactiveFormsModule,
    MatSidenavModule,
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
    MatSidenavModule,
  ],
  declarations: []
})
export class SharedModule { }

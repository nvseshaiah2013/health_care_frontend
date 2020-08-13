import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './services/loading.service';


@NgModule({
  declarations: [
    DashboardComponent, 
    AppointmentsComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    LoadingService
  ]
})
export class PatientModule { }

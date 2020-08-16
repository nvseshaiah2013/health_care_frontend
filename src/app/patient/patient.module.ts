import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './services/loading.service';
import { JwtInterceptor } from '@auth0/angular-jwt';


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
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class PatientModule { }

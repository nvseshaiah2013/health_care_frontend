import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagnosticCenterComponent } from './diagnostic-center/diagnostic-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './loading/loading.component';
import { VacantBedsComponent } from './vacant-beds/vacant-beds.component';
import { JwtInterceptor } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    DashboardComponent,
    DiagnosticCenterComponent,
    AddTestComponent,
    LoadingComponent,
    VacantBedsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    LoadingService,    {
      provide : HTTP_INTERCEPTORS,
      useClass : JwtInterceptor,
      multi :true
    }
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagnosticCenterComponent } from './diagnostic-center/diagnostic-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './loading/loading.component';
import { AddDiagnosticCenterComponent } from './add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './view-diagnostic-center/view-diagnostic-center.component';
import { DiagnosticCenterService } from './services/diagnostic-center.service';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { TestDetailsComponent } from './test-details/test-details.component';
import { VacantBedsComponent } from './vacant-beds/vacant-beds.component';
import { VacantBedsServiceService } from './services/vacant-beds-service.service';


@NgModule({
  declarations: [
    DashboardComponent,
    DiagnosticCenterComponent,
    AddTestComponent,
    LoadingComponent,
    AddDiagnosticCenterComponent,
    ViewDiagnosticCenterComponent,
    TestDetailsComponent,
    VacantBedsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [
    LoadingService,
    DiagnosticCenterService
    ,
    VacantBedsServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }

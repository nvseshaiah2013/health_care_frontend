import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './services/loading.service';
import { AllBedsComponent } from './all-beds/all-beds.component';
import { CenterService } from './services/center.service';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { AddVentilatorBedComponent } from './add-ventilator-bed/add-ventilator-bed.component';
import { AddGeneralBedComponent } from './add-general-bed/add-general-bed.component';
import { AddIccuBedComponent } from './add-iccu-bed/add-iccu-bed.component';
import { AddIcuBedComponent } from './add-icu-bed/add-icu-bed.component';
import { AddBedComponent } from './add-bed/add-bed.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AllTestsComponent,
    LoadingComponent,
    AllBedsComponent,
    AddVentilatorBedComponent,
    AddGeneralBedComponent,
    AddIccuBedComponent,
    AddIcuBedComponent,
    AddBedComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    LoadingService,
    CenterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class CenterModule { }

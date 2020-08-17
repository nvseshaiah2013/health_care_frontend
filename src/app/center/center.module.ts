import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './services/loading.service';
import { UpdateTestResultComponent } from './update-test-result/update-test-result.component';
import { JwtInterceptor } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    DashboardComponent,
    AllTestsComponent,
    LoadingComponent,
    UpdateTestResultComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers : [
    LoadingService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : JwtInterceptor,
      multi :true
    }
  ]
})
export class CenterModule { }

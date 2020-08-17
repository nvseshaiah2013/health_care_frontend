import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDiagnosticCenterComponent } from './add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './view-diagnostic-center/view-diagnostic-center.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { AddTestComponent } from './add-test/add-test.component';
import { DiagnosticCenterComponent } from './diagnostic-center/diagnostic-center.component';
import { VacantBedsComponent } from './vacant-beds/vacant-beds.component';


const routes: Routes = [
  { path : '', component : DashboardComponent ,children : [
      { path : 'addDiagnosticCenter', component : AddDiagnosticCenterComponent },
      { path : 'viewDiagnosticCenter', component : ViewDiagnosticCenterComponent },
      { path : 'testDetails',component : TestDetailsComponent},
      { path : 'add-test', component : AddTestComponent },
      { path : 'diagnostic-centers', component : DiagnosticCenterComponent },
      { path : 'vacantbedsall',component : VacantBedsComponent},
      { path : '**', component : AddDiagnosticCenterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

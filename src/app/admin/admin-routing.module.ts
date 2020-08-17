import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDiagnosticCenterComponent } from './add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './view-diagnostic-center/view-diagnostic-center.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { AllDiagnosticCenterComponent } from './all-diagnostic-center/all-diagnostic-center.component';
import { AddTestToCenterComponent } from './add-test-to-center/add-test-to-center.component';
import { RemoveTestFromCenterComponent } from './remove-test-from-center/remove-test-from-center.component';


const routes: Routes = [
  { path : '', component : DashboardComponent ,children : [
      { path : 'addDiagnosticCenter', component : AddDiagnosticCenterComponent },
      { path : 'viewDiagnosticCenter', component : ViewDiagnosticCenterComponent },
      {path:"testDetails",component : TestDetailsComponent},
      {path:"allDiagnosticCenter",component:AllDiagnosticCenterComponent},
      {path:"addTestToCenter/:id",component:AddTestToCenterComponent},
      {path:"removeTestFromCenter/:id",component:RemoveTestFromCenterComponent},
      { path : '**', component : AddDiagnosticCenterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

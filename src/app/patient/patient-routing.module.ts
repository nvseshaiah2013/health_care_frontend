import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { VacantBedComponent } from './vacant-bed/vacant-bed.component';
import { MyBedComponent } from './my-bed/my-bed.component';
import { AllTestComponent } from './all-test/all-test.component';
import { DiagCenterComponent } from './diag-center/diag-center.component';
import { TestResultComponent } from './test-result/test-result.component';
import { ViewBedComponent } from './view-bed/view-bed.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'appointments', component: AppointmentsComponent },
      {path:'diagCenter',component:DiagCenterComponent , children:[{path:'vacantbeds',component:VacantBedComponent}]
      },
      {path:'mybed',component:MyBedComponent},
      {path:'allTest',component:AllTestComponent, children:[{path:'testResult', component:TestResultComponent}]},
      {path:'vacantbeds',component:VacantBedComponent},
      {path:'testResult',component:TestResultComponent},
      {path:'bed',component:ViewBedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }

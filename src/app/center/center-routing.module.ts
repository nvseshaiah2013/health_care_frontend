import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { AllBedsComponent } from './all-beds/all-beds.component';
import { AddBedComponent } from './add-bed/add-bed.component';
import { UpdateTestResultComponent } from './update-test-result/update-test-result.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'all-test', component: AllTestsComponent },
      { path : 'all-beds', component : AllBedsComponent },
      { path : 'add-bed', component : AddBedComponent},
      { path : 'Updatetestresult',component:UpdateTestResultComponent},
      { path : '**', component : AllTestsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { UpdateTestResultComponent } from './update-test-result/update-test-result.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'all-test', component: AllTestsComponent },
      { path : 'Updatetestresult',component:UpdateTestResultComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }

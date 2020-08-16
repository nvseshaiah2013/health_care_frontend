import { Component, OnInit } from '@angular/core';
import { DiagnosticCenterSignUpRequest } from 'src/app/diagnostic-center-sign-up-request';
import { DiagnosticCenterService } from '../services/diagnostic-center.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-diagnostic-center',
  templateUrl: './add-diagnostic-center.component.html',
  styleUrls: ['./add-diagnostic-center.component.css']
})
export class AddDiagnosticCenterComponent implements OnInit {

  diagnosticCenter: DiagnosticCenterSignUpRequest = new DiagnosticCenterSignUpRequest();

  constructor(private diagnosticCenterService:DiagnosticCenterService, private route:Router) { }

  ngOnInit(): void {
  }

  addDiagnosticCenter()
  {
    console.log("add center");

    this.diagnosticCenterService.insertDiagnosticCenter(this.diagnosticCenter).subscribe(data=>
      {this.diagnosticCenter = data});
    
      this.route.navigateByUrl("/admin/viewDiagnosticCenter");
  }

}

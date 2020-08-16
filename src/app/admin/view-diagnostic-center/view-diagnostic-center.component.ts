import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from 'src/app/diagnostic-center';
import { DiagnosticCenterService } from '../services/diagnostic-center.service';

@Component({
  selector: 'app-view-diagnostic-center',
  templateUrl: './view-diagnostic-center.component.html',
  styleUrls: ['./view-diagnostic-center.component.css']
})
export class ViewDiagnosticCenterComponent implements OnInit {

  diagnosticCenters : DiagnosticCenter [] = [];

  constructor(private diagnosticCenterService:DiagnosticCenterService) { }

  ngOnInit(): void {
    console.log("got centers");
    this.diagnosticCenterService.loadDiagnosticCenters().subscribe(data => {
      this.diagnosticCenters = data;
      console.log(this.diagnosticCenters); 
    });
  }
  
}

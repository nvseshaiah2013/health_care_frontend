import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { DiagnosticCenter } from '../models/DiagnosticCenter';

@Component({
  selector: 'app-add-test-to-center',
  templateUrl: './add-test-to-center.component.html',
  styleUrls: ['./add-test-to-center.component.css']
})
export class AddTestToCenterComponent implements OnInit {

  diagnosticCenterId:number;
  diagnosticTestOfCenter:DiagnosticCenter[];
  constructor(private adminService:AdminService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.diagnosticCenterId = params['id'];
    })
    console.log(this.diagnosticCenterId);
  }

}

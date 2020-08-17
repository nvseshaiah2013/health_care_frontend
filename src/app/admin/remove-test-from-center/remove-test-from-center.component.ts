import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { DiagnosticCenter } from '../models/DiagnosticCenter';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-test-from-center',
  templateUrl: './remove-test-from-center.component.html',
  styleUrls: ['./remove-test-from-center.component.css']
})
export class RemoveTestFromCenterComponent implements OnInit {

  diagnosticCenterId:number;
  diagnosticTestOfCenter:DiagnosticCenter[];
  constructor(private adminService:AdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.diagnosticCenterId = params['id'];
    })
    console.log(this.diagnosticCenterId);
  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { DiagnosticTest } from '../models/DiagnosticTest';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  tests:DiagnosticTest[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllTests().subscribe(
      data=>{
        this.tests=data;
        console.log(this.tests);
      },err=>{
        console.log(err.stack);
      }
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { UpdateResultService } from '../services/update-result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-test-result',
  templateUrl: './update-test-result.component.html',
  styleUrls: ['./update-test-result.component.css']
})
export class UpdateTestResultComponent implements OnInit {
  
 

  constructor(private updateResultService:UpdateResultService, private formBuilder : FormBuilder) { }

  updateResultForm:FormGroup;
  conditionType:string[];
  msg: string;
  errorMsg: string;

  ngOnInit(): void {
    console.log("errorMsg "+this.errorMsg);
    this.conditionType=['Below Normal','Normal','Above Normal'];
    console.log(this.conditionType);
    this.updateResultForm = this.formBuilder.group({
      appointmentId : ['', Validators.compose([Validators.required, Validators.pattern("[1-9]*")])],
      condition     : ['', Validators.compose([Validators.required])],
      testReading   : ['',Validators.compose([Validators.required,Validators.pattern("[1-9]*")])]

    });
  }

  addTestResult(){
    console.log(this.updateResultForm.value);
    this.updateResultService.addTestResult(this.updateResultForm.value).subscribe(data=>{
      this.msg="Successfully Added";
      this.errorMsg=undefined;
      // console.log(error);
    },error=>{
      this.errorMsg=error.error.message;
      this.msg=undefined;
      console.log(error);
      console.log("Error h +"+error.error.message);
    });
      
  }

}

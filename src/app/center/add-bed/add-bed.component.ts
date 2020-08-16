import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bed',
  templateUrl: './add-bed.component.html',
  styleUrls: ['./add-bed.component.css']
})
export class AddBedComponent implements OnInit {

  radioValue : string = 'general'
  constructor() 
  { 

  }

  ngOnInit(): void {
  }

  onSelectChange(value) {
    this.radioValue = value;
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { CenterService } from '../services/center.service';
import { BedsList } from '../models/beds-list.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-beds',
  templateUrl: './all-beds.component.html',
  styleUrls: ['./all-beds.component.css']
})
export class AllBedsComponent implements OnInit, OnDestroy {

  bedsList: BedsList;
  loadSubscription : Subscription;
  generalBedsCount : number = 0;
  icuBedsCount : number = 0;
  iccuBedsCount : number = 0;
  ventilatorBedsCount : number = 0;

  constructor(
    private loader: LoadingService,
    private centerService: CenterService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.centerService.getAllBeds().subscribe(beds => {
      this.bedsList = beds;
      this.generalBedsCount = this.bedsList['generalBeds'].length;
      this.iccuBedsCount = this.bedsList['intensiveCriticalCareBeds'].length;
      this.ventilatorBedsCount = this.bedsList['ventilatorBeds'].length;
      this.icuBedsCount = this.bedsList['intensiveCareBeds'].length;
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.error(err.error['message'], err.error['header']);
    }
    );
  }

  navigateToSection(section : string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  ngOnDestroy() {
    this.loader.show();
  }
}

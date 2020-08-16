import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  showLoad : boolean = true;
  loadSubscription : Subscription;
  constructor(
    private loaderService : LoadingService,
    private cd : ChangeDetectorRef
  ) { }



  ngOnInit(): void {
    this.loadSubscription = this.loaderService.getState().subscribe(status => {
      this.showLoad = status;
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    this.loadSubscription.unsubscribe();
  }
}

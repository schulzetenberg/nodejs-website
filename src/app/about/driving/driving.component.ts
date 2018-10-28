import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrls: ['./driving.component.scss'],
})
export class DrivingComponent implements OnInit {
  car: {};
  avgMiles: String;
  milesDriven: String;
  barrelDays: String;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.serverService.getDrivingData().then((data: any) => {
      this.car = data;
      const avgDriving = data && data.avgDriving;

      if (avgDriving) {
        this.avgMiles = avgDriving.toFixed(0) + ' Miles';
      }

      const totalMiles = data && data.totalMiles;

      if (totalMiles) {
        this.milesDriven = totalMiles.toFixed(0) + ' Miles';
      }

      const daysPerBarrel = data && data.daysPerBarrel;

      if (daysPerBarrel) {
        this.barrelDays = daysPerBarrel.toFixed(0) + ' Days';
      }
    });
  }

}

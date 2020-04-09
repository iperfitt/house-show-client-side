import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(private stateService: StateService){ }

  event : any
  fullAddress : String;

  ngOnInit() {
    this.event = this.stateService.data;
    this.createFullAddress();
    this.stateService.data = undefined;
    console.log(this.fullAddress);
  } 
  
  createFullAddress() {
    this.fullAddress = this.event.eventAddress.housenumber +
    ' ' + this.event.eventAddress.street + ', ' + this.event.eventAddress.city
    + ', ' + this.event.eventAddress.state + ', ' + this.event.eventAddress.country
    + ', ' + this.event.eventAddress.zipcode;
  }

}

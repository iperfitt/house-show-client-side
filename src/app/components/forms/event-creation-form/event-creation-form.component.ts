import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent {

  model = new Event(0,"", "", "")
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;

  constructor(private eventService: EventService) { }

  submitEvent() {
    console.log(this.model);
  this.eventService.submitEvent(this.model).subscribe(
    (val: any) => console.log(val)); 
  }

  getAddress(place: object) { 
    this.address = place['formatted_address'];
  }
  
}

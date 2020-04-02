import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { EventAddress } from 'src/app/models/eventaddress';


@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent {

  event = {
    "eventId" : 0,
    "eventName" : "sadfasdf",
    "eventAddress": "asadfasdf",
    "eventGenre": "asdfasdf"
  } 

  constructor(private eventService: EventService) { }

  submitEvent() {
    console.log(this.event);
    this.eventService.submitEvent(this.event).subscribe(
    (val: any) => console.log(val)); 
  }

  getOutputVal(selected: string) {
    if(selected) {  
     this.event.eventAddress = selected;
    }
  }
}

import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent {

  event = {
    "eventId" : 0,
    "eventName" : "",
    "eventAddress": "",
    "eventGenre": "",
    "eventType": ""
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

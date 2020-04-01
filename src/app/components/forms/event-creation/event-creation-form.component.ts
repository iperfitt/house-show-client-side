import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { EventAddress } from 'src/app/models/eventaddress';


@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent {

  model = new Event(0,"", null, "")

  constructor(private eventService: EventService) { }

  submitEvent() {
    console.log(this.model);
    this.eventService.submitEvent(this.model).subscribe(
    (val: any) => console.log(val)); 
  }

  getOutputVal(selected: string) {
    if(selected) {
      let address = new EventAddress(0,'','','','','','');
      this.model.eventAddress = address;

    }
  }
  
}

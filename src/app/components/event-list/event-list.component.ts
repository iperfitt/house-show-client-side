import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state-service.service';
import { EventFilterService } from 'src/app/services/event-filter.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(
    private eventService: EventService, 
    private router: Router, 
    private stateService: StateService, 
    private eventFilterService: EventFilterService
    ) { }

  events : any[]

  filteredEvents : any[]

  private _eventFilter: string;

  public set eventFilter(value: string) {
    this._eventFilter = value;
    this.filteredEvents = this._eventFilter ? 
    this.eventFilterService.filterEvents(this._eventFilter, this.events) : this.events;
}
  
  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (val: []) => {
        this.events = val;
        this.filteredEvents = this.events;
      });
    }

  eventInfo(event : Event) { 
    this.stateService.data = event;
    this.router.navigate(['/eventinfo'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  } 

} 


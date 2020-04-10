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

  private _cityFilter: string;

  private _typeFilter: string;

  private _nameFilter: string;

  private _genreFilter: string;
  
  public set nameFilter(value: string) {
      this._nameFilter = value;
      this.filteredEvents = this._nameFilter ? 
      this.eventFilterService.filterName(this._nameFilter, this.events) : this.events;
  }

  public set genreFilter(value: string) {
    this._genreFilter = value;
    this.filteredEvents = this._genreFilter ? 
    this.eventFilterService.filterGenre(this._genreFilter, this.events) : this.events;
}

  public set cityFilter(value: string) {
    this._cityFilter = value;
    this.filteredEvents = this._cityFilter ? 
    this.eventFilterService.filterCity(this._cityFilter, this.events) : this.events;
}

  public set typeFilter(value: string) {
    this._typeFilter = value;
    this.filteredEvents = this._typeFilter ? 
    this.eventFilterService.filterType(this._typeFilter, this.events) : this.events;
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


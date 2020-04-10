import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router, private stateService: StateService) { }

  events : any[]

  filteredEvents : any[]

  private _cityFilter: string;

  private _typeFilter: string;

  private _nameFilter: string;

  private _genreFilter: string;

  // public get listFilter(): string {
  //   return this._cityFilter;
  // }
  
  public set nameFilter(value: string) {
      this._nameFilter = value;
      this.filteredEvents = this._nameFilter ? this.filterName(this._nameFilter) : this.events;
  }

  public set genreFilter(value: string) {
    this._genreFilter = value;
    this.filteredEvents = this._genreFilter ? this.filterGenre(this._genreFilter) : this.events;
}

public set cityFilter(value: string) {
  this._cityFilter = value;
  this.filteredEvents = this._cityFilter ? this.filterCity(this._cityFilter) : this.events;
}

public set typeFilter(value: string) {
this._typeFilter = value;
this.filteredEvents = this._typeFilter ? this.filterType(this._typeFilter) : this.events;
}

  filterCity(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return (this.events.filter((event: any) =>
    event.eventAddress.city.toLowerCase().indexOf(filterBy) !== -1));
}

filterType(filterBy: string): any[] {
  filterBy = filterBy.toLocaleLowerCase();
  return (this.events.filter((event: any) =>
  event.eventType.toLowerCase().indexOf(filterBy) !== -1));
}

filterName(filterBy: string): any[] {
  filterBy = filterBy.toLocaleLowerCase();
  return (this.events.filter((event: any) =>
  event.eventName.toLowerCase().indexOf(filterBy) !== -1));
}

filterGenre(filterBy: string): any[] {
filterBy = filterBy.toLocaleLowerCase();
return (this.events.filter((event: any) =>
event.eventGenre.toLowerCase().indexOf(filterBy) !== -1));
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


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

  private _listFilter: string;

  public get listFilter(): string {
    return this._listFilter;
  }
  
  public set listFilter(value: string) {
      this._listFilter = value;
      this.filteredEvents = this._listFilter ? this.performFilter(this._listFilter) : this.events;
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    console.log(this.events.filter((event: any) =>
          event.eventAddress.city.toLowerCase().indexOf(filterBy) !== -1));
    return this.events.filter((event: any) =>
    event.eventAddress.city.toLowerCase().indexOf(filterBy) !== -1)
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


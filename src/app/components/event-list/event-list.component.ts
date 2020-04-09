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

  events : []
  
  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (val: []) => {
        return this.events = val;
      });
    }

  eventInfo() { 
    this.stateService.data = {waggo : 'denniso'};
    this.router.navigate(['/eventinfo'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  } 
} 


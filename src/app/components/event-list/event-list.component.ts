import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router) { }

  events = []

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (val: any) => this.events = val);  
  }

  eventInfo() { 
    this.router.navigate(['/eventinfo'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  } 

} 


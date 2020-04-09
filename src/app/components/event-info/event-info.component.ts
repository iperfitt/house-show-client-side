import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(private stateService: StateService){ }

  ngOnInit() {
    console.log(this.stateService.data);
  } 

}

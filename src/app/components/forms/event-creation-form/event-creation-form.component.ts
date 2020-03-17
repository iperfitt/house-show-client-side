import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent implements OnInit {

  model = new Event(0,"", "", "")

  constructor(private eventService: EventService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  submitEvent() {
    console.log(this.model);
  this.eventService.submitEvent(this.model).subscribe(
    (val: any) => console.log(val)); 
  }
  
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;

  @ViewChild('search', null)
  public searchElementRef: ElementRef;

  autocomplete() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
   
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.model.location = place.formatted_address;
          });
        });
      });
    }

  ngOnInit() {

    this.autocomplete();
  }

  
}

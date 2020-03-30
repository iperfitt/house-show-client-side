import { MapsAPILoader} from '@agm/core';
import { Component, ViewChild, OnInit, NgZone, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-google-places',
  templateUrl: './google-places.component.html',
  styleUrls: ['./google-places.component.css']
})
export class GooglePlacesComponent implements OnInit{
 
    title: string = 'AGM project';
    latitude: number;
    longitude: number;
    zoom: number;
    @Input() address: string;
   
    @ViewChild('search')
    public searchElementRef: ElementRef;
   
   
    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone
    ) { }
   
   
    ngOnInit() {
      this.autoComplete();
    }

    autoComplete() {
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
              //set latitude, longitude and zoom
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.zoom = 12;
            });
          });
        });
    }
}

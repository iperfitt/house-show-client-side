import { Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-google-places',
  templateUrl: './google-places.component.html',
  styleUrls: ['./google-places.component.css']
})
export class GooglePlacesComponent {

  formattedAddress = '';

  options = {
    componentRestrictions : {
      country: ['US']
    }
  }

  @Output() outputToParent = new EventEmitter<string>();

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
        public handleAddressChange(address: Address) {
          this.formattedAddress = address.formatted_address;
          this.outputToParent.emit(this.formattedAddress);
      }
  
//  ////OLD Semi-working code
//     title: string = 'AGM project';
//     latitude: number;
//     longitude: number;
//     zoom: number;
//     @Input() address: string;
//     @Output() outputToParent = new EventEmitter<string>();
   
//     @ViewChild('search')
//     public searchElementRef: ElementRef;
   
//       constructor(
//       private mapsAPILoader: MapsAPILoader,
//       private ngZone: NgZone
//     ) { }
   
   
//     ngOnInit() {
//       this.autoComplete();
//     }

//     onKey(event : any) {
//         this.address = event.target.value;
//         this.outputToParent.emit(this.address);
//     }
    

//     autoComplete() {
//       //load Places Autocomplete
//       this.mapsAPILoader.load().then(() => {
     
//           let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//             types: ["address"]
//           });
//           autocomplete.addListener("place_changed", () => {
//             this.ngZone.run(() => {
//               //get the place result
//               let place: google.maps.places.PlaceResult = autocomplete.getPlace();
//               //verify result
//               if (place.geometry === undefined || place.geometry === null) {
//                 return;
//               }
//             });
//           });
//         });
//     }

    
}

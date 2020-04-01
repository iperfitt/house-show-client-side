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
  

    
}

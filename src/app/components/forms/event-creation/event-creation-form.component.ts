import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent {

  event = {
    "eventId" : 0,
    "eventName" : "",
    "eventAddress": "",
    "eventGenre": "",
    "eventType": ""
  } 

  eventFlyer : any

  constructor(private eventService: EventService) { }

  submitEvent() {
    this.eventService.submitEvent(this.eventFlyer).subscribe(
      res => {
        console.log(res);
        // this.receivedImageData = res;
        // this.base64Data = this.receivedImageData.pic;
        // this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
      },
        err => console.log('Error Occured duringng saving: ' + err)
              );
  }

  getAddressOutputVal(selected: string) {
    if(selected) {  
     this.event.eventAddress = selected;
    }
  }

  getFlyerOutputVal(selectedFile: any) {
    if(selectedFile) {  
      const uploadData = new FormData();
      uploadData.append('myFile', selectedFile, selectedFile.name);
      this.eventFlyer = uploadData;
    }
  }
}

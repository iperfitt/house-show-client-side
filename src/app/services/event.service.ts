import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient ) { }

  getAllEvents() {
    return this.http.get(`https://house-show-server-side.herokuapp.com/allevents`);
  }

  submitEvent(event : Event) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post(`/createevent`,event, options);
  }
}

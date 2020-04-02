import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient ) { }

  baseUrl = environment.baseUrl;

  getAllEvents() {
    return this.http.get(this.baseUrl + '/allevents');
  }

  submitEvent(event : any) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post(this.baseUrl + '/createevent',event, options);
  }
}

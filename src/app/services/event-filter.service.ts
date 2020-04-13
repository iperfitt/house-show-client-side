import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventFilterService {

  constructor() { }

filterEvents(filterBy: string, events: any[]): any[] {
  let filterArr : string[];
  filterBy = filterBy.toLocaleLowerCase();
  filterArr = filterBy.split(" ");
  for (let i = 0; i < filterArr.length; i++) {
    events = events.filter((event: any) => {
      if (event.eventName.toLowerCase().indexOf(filterArr[i]) !== -1) {
        return true;
      }
      if (event.eventAddress.city.toLowerCase().indexOf(filterArr[i]) !== -1) {
        return true;
      }
      if (event.eventGenre.toLowerCase().indexOf(filterArr[i]) !== -1) {
        return true;
      }
      if (event.eventType.toLowerCase().indexOf(filterArr[i]) !== -1) {
        return true;
      }
      return false;
    }
    );
  }
  return events;
}
}

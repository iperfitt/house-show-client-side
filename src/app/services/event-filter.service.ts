import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventFilterService {

  constructor() { }

filterCity(filterBy: string, events: any[]): any[] {
  filterBy = filterBy.toLocaleLowerCase();
  return (events.filter((event: any) =>
  event.eventAddress.city.toLowerCase().indexOf(filterBy) !== -1));
}

filterType(filterBy: string, events: any[]): any[] {
  filterBy = filterBy.toLocaleLowerCase();
  return (events.filter((event: any) =>
  event.eventType.toLowerCase().indexOf(filterBy) !== -1));
}

filterName(filterBy: string, events: any[]): any[] {
  filterBy = filterBy.toLocaleLowerCase();
  return (events.filter((event: any) =>
  event.eventName.toLowerCase().indexOf(filterBy) !== -1));
}

filterGenre(filterBy: string, events: any[]): any[] {
filterBy = filterBy.toLocaleLowerCase();
return (events.filter((event: any) =>
event.eventGenre.toLowerCase().indexOf(filterBy) !== -1));
}
}

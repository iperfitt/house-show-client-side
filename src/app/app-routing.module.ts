import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'allevents'},
  { path: 'allevents', component: EventListComponent },
  { path: 'createevent', component: CreateEventComponent },
  { path: 'eventinfo', component: EventInfoComponent, data : {some_data : 'some_value'} },
  { path: 'about', component: AboutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {}
 }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventCreationFormComponent } from './components/forms/event-creation/event-creation-form.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { CookieService } from 'ngx-cookie-service';
import { GooglePlacesComponent } from './components/google-places/google-places.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    EventCreationFormComponent,
    EventInfoComponent,
    GooglePlacesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbmhPp8vxHPCaB4nubu2M4EDqEZ2A-2vk',
      libraries: ['places']
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }

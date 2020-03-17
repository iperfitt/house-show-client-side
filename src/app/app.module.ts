import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventCreationFormComponent } from './components/forms/event-creation-form/event-creation-form.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { AgmCoreModule } from '@agm/core';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    EventCreationFormComponent,
    EventInfoComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      libraries: ['places']
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonItemComponent } from './person-item/person-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './_services/person.service';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlacesComponent } from './places/places.component';
import { PlaceItemComponent } from './place-item/place-item.component';
import { PlaceService } from './_services/place.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlacesComponent,
    PlaceItemComponent,
    PersonDetailComponent,
    PersonItemComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [PersonService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

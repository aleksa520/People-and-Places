import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html'
})
export class PlacesComponent implements OnInit {

  places: Observable<Place[]>  = of([]);

  constructor(private placeService: PlaceService, private router: Router) { }

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this.placeService.getPlaces()
        .pipe(places => this.places = places);
  }

  addPlace(){
    this.router.navigate(['/places/add']);
  };
}
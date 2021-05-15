import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html'
})
export class PlaceDetailComponent implements OnInit {

  place: Place;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private placeService: PlaceService) { }

  ngOnInit(): void {
    let placeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.placeService.getPlace(Number(placeId)).subscribe((place) =>{
      this.place = place;
    });
  }

  delete(){
    
  }
}
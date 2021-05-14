import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../_models/place';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html'
})
export class PlaceItemComponent implements OnInit {
  @Input() place: Place;
  constructor() { }

  ngOnInit(): void {
  }
}
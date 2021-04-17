import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../_models/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html'
})
export class PersonItemComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit(): void {
  }
}
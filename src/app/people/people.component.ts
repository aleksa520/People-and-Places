import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  people: Observable<Person[]>  = of([]);

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeople();
  }


  getPeople() {
    this.personService.getPeople()
        .pipe(people => this.people = people);
  }

  addPerson(){

  };
}

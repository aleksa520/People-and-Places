import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html'
})
export class AddPersonComponent implements OnInit {

  PersonForm: FormGroup;
  person: Person = new Person();

  constructor(private personService: PersonService) { }

  ngOnInit(): void {

  }

  clearPerson(){

  }

  add(){

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

  person: Person;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private personService: PersonService) { }

  ngOnInit(): void {
    let personId = this.activatedRoute.snapshot.paramMap.get('id');

    this.personService.getPerson(Number(personId)).subscribe((person) =>{
      this.person = person;
    });
  }

  delete(){
    
  }
}

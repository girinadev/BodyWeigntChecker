import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/Person';
import {PersonService} from '../../services/PersonService';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.gerPersons();
  }

}

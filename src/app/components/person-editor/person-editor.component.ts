import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/Person';
import {PersonService} from '../../services/PersonService';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  person: Person;

  constructor(private personService: PersonService) {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onCheckWeight() {

    if (!this.isPersonValid()) {
      alert('Something is wrong. Please check inputs.');
      return;
    }

    this.person.indexBodyWeight = this.personService.getPersonIndexBodyWeight(this.person);

    this.personService.savePerson(this.person);

    const message = this.personService.getIndexWeightMessage(this.person);

    alert(message);
  }

  isPersonValid(): boolean {

    if (this.person.age == null || this.person.height == null || this.person.weight == null) {
      return false;
    }

    if (this.person.age < 0 || this.person.height < 1 || this.person.weight < 1) {
      return false;
    }

    return true;
  }
}

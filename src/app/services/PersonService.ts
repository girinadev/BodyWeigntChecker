import { Injectable } from '@angular/core';
import {Person} from '../models/Person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  private storageKey = 'PERSONS';

  constructor() {
  }

  savePerson(person: Person): void {
    const persons = this.gerPersons();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  gerPersons(): Person[] {
    const jsonPersons = localStorage.getItem(this.storageKey);
    return jsonPersons != null ? JSON.parse(jsonPersons) : [];
  }

  getPersonIndexBodyWeight(person: Person): number {
    const heightInM = person.height / 100;
    return person.weight / (heightInM * heightInM);
  }

  getIndexWeightMessage(person: Person): string {

    let minIndex = 16;
    let maxIndex = 18.5;

    if (person.age >= 19 && person.age <= 24) {
      minIndex = 19;
      maxIndex = 24;
    } else if (person.age >= 25 && person.age <= 34) {
      minIndex = 20;
      maxIndex = 25;
    }  else if (person.age >= 35 && person.age <= 44) {
      minIndex = 21;
      maxIndex = 26;
    } else if (person.age >= 45 && person.age <= 54) {
      minIndex = 22;
      maxIndex = 27;
    } else if (person.age >= 55 && person.age <= 64) {
      minIndex = 23;
      maxIndex = 28;
    } else if (person.age >= 65) {
      minIndex = 24;
      maxIndex = 29;
    }

    if (person.indexBodyWeight < minIndex) {
      return 'Body weight deficit';
    }

    if (person.indexBodyWeight >= minIndex && person.indexBodyWeight <= maxIndex) {
      return 'Body weight normal';
    }

    return 'Body weight overweight';
  }
}

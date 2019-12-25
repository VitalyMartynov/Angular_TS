import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "./shared/models/person.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  fnFilter: boolean;
  lNFilter: boolean;
  srchFN = "";
  srchLN = "";
  persons: Person[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.persons.push(new Person("Вася", "Петров", "8(916) 111-2233", 1));
    this.persons.push(new Person("Петя", "Васильев", "8(916) 111-2233", 2));
    this.persons.push(new Person("Ира", "Аннина", "8(916) 111-2233", 3));
    this.persons.push(new Person("Аня", "Иришкина", "8(916) 111-2233", 4));
  }

  ngOnDestroy(): void {
  }
  searchByFN() {
    this.fnFilter = !this.fnFilter;
    this.srchFN = "";
  }
  searchByLN() {
    this.lNFilter = !this.lNFilter;
    this.srchLN = "";
  }
  onAddPerson(person: Person) {
    if (this.persons.length == 0) {
      person.id = 1;
    } else {
      person.id = (this.persons[this.persons.length - 1].id + 1);
    }
    this.persons.push(person);
  }
  onEditPerson(person: Person) {
    Object.assign (this.persons.find((element, index, array) => {
      return (element.id === person.id)
    }), person);
  }
  onDeletePerson(personId: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find((element, index, array) => {
      return (element.id === personId)
    })), 1);
  }
}

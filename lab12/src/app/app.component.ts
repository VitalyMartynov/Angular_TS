import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "./shared/models/person.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.persons.push(new Person("Имя", "Фамилия", 1));
    this.persons.push(new Person("Имя", "Фамилия", 2));
    this.persons.push(new Person("Имя", "Фамилия", 3));
    this.persons.push(new Person("Имя", "Фамилия", 4));
  }

  ngOnDestroy(): void {
  }
  onAddPerson(person: Person) {
    if (this.persons.length == 0) {
      person.id = 1;
    } else {
      person.id = (this.persons[this.persons.length - 1].id + 1);
    }
    this.persons.push(person);
  }
  onEditPerson(peroson: Person) {
    Object.assign (this.persons.find((element, index, array) => {
      return (element.id === peroson.id)
    }), peroson);
  }
  onDeletePerson(perosonId: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find((element, index, array) => {
      return (element.id === perosonId)
    })), 1);
  }
}

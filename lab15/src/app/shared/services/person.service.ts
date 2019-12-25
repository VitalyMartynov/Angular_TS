import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {PersonAPIService} from "./person-api.service";
import {Person} from "../models/person.model";
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit{

  persons: any;

  constructor(private personApiService: PersonAPIService) {

    this.getPersons();
  }

  ngOnInit() {
  }

  async getPersons() {
    try {
      let gpersons = this.personApiService.getPersons();
      this.persons = (isNullOrUndefined(await gpersons)) ? [] : await gpersons;

    } catch (err) {

      console.log(err);
    }
  }
  getPersonById(id: number) {
    
    return this.persons.find(person => person.id === id);
  }
  async onAddPerson(person: Person) {
    person.id = (this.persons.length) ? this.persons[this.persons.length - 1].id + 1 : 1;

    this.persons.push(person);

    try {
      await this.personApiService.postPersons({

        firstname: person.firstname, lastname: person.lastname, phone: person.phone});
    }
    catch (e) {

      console.error(e);
    }
  }

  async onEditPerson(person: Person) {
    console.log("edit " + person.id);
    console.log(this.persons);
    this.persons.splice (
      this.persons.findIndex(person => {person.id === person.id}),
      1, person);
    console.log(this.persons);
    try {

      await this.personApiService.putPersons(person.id, {
        firstname: person.firstname, lastname: person.lastname, phone: person.phone});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onDeletePerson(personId: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find((element, index, array) => {
      return (element.id === personId)
    })), 1);
    try {

      await this.personApiService.deletePersons(personId);
    }
    catch (e) {

      console.error(e);
    }
  }
}

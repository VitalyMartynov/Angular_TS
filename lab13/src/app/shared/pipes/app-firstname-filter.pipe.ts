import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "../models/person.model";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'appFirstNameFilter'
})
export class AppFirstnameFilterPipe implements PipeTransform {

  transform(persons: Person[], search: string) {
    if (!isNullOrUndefined(persons) && search.trim() !== "") {
      let filter = persons.filter(
        person => person.firstname.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return  filter;
    }
    return persons;
  }

}

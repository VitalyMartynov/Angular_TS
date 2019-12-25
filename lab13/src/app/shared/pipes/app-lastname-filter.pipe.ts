import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "../models/person.model";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'appLastNameFilter'
})
export class AppLastnameFilterPipe implements PipeTransform {

  transform(persons: Person[], search: string) {
    if (!isNullOrUndefined(persons) && search.trim() !== "") {
      let filter = persons.filter(
        person => person.lastname.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter;
    }
    return persons;
  }
}

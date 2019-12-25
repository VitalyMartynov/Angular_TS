import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "../models/person.model";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'appLastNameFilter'
})
export class AppLastNameFilterPipe implements PipeTransform {

  transform(persons: Person[], search: string) {
    if (!isNullOrUndefined(persons) && search.trim() !== "") {
      console.log(search);
      let filter = persons.filter(
        person => person.lastname.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter;
    }
    return persons;
  }
}

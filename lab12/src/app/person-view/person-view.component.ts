import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() inPerson: Person;
  @Output() deleteperson = new EventEmitter<number>();
  @Output() editperson = new EventEmitter<Person>();
  edit: boolean;
  constructor() { }

  ngOnInit() {
    this.edit = false;
  }

  onDeletePerson() {
    this.deleteperson.emit(this.inPerson.id);
  }
  onEditPerson(firstname: string = this.inPerson.firstname, lastname: string = this.inPerson.lastname) {
    if (firstname !== "" && lastname !== "") {
      let person = new Person(firstname, lastname, this.inPerson.id);
      this.editperson.emit(person);
      this.editSwitch();
    }
  }
  editSwitch() {
    this.edit = !this.edit;
  }
}

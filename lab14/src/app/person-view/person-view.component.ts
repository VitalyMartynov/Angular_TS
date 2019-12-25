import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() inPerson: Person;
  @Output() delPerson = new EventEmitter<number>();
  @Output() editPerson = new EventEmitter<Person>();
  editForm: FormGroup;
  disabled = false;
  edit: boolean;
  constructor() { }

  ngOnInit() {
    this.edit = false;
    this.editForm = new FormGroup( {
      firstname: new FormControl({value: this.inPerson.firstname, disabled: this.disabled}, [Validators.required]),
      lastname: new FormControl({value: this.inPerson.lastname, disabled: this.disabled}, [Validators.required]),
      phone: new FormControl({value: this.inPerson.phone, disabled: this.disabled}, [Validators.required])
    })
  }

  onDeletePerson() {
    this.delPerson.emit(this.inPerson.id);
  }
  onEditPerson () {
    let person = new Person(this.editForm.value.firstname, this.editForm.value.lastname, this.editForm.value.phone, this.inPerson.id);
      this.editPerson.emit(person);
      this.editSwitch();

  }
  editSwitch () {
    this.edit = !this.edit;
  }
}

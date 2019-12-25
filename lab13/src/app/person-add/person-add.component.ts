import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();
  addForm: FormGroup;
  disabled = false;
  constructor() { }

  ngOnInit() {
    this.addForm = new FormGroup( {
      firstname: new FormControl({value: '', disabled: this.disabled}, [Validators.required]),
      lastname: new FormControl({value: '', disabled: this.disabled}, [Validators.required]),
      phone: new FormControl({value: '', disabled: this.disabled}, [Validators.required])
    })
  }
  onAddPerson() {
    let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname, this.addForm.value.phone);
    this.addperson.emit(person);

  }
}

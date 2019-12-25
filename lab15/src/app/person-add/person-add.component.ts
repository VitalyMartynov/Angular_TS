import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../shared/services/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  id: number;
  addForm: FormGroup;
  disabled = false;

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private personServise: PersonService) {
    this.activatedRouter.params.subscribe(param => {
       this.id = param.id;
    });
  }

  ngOnInit() {

    let person = this.personServise.getPersonById(this.id);

    if (isNullOrUndefined(person)) 
    person = {firstname: "", lastname: "", phone: ""};

    this.addForm = new FormGroup( {
      firstname: new FormControl({value: person.firstname, disabled: this.disabled}, [Validators.required]),
      lastname: new FormControl({value: person.lastname, disabled: this.disabled}, [Validators.required]),
      phone: new FormControl({value: person.phone, disabled: this.disabled}, [Validators.required])
    })
  }

  save() {
    if (this.id) {

      let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname, this.addForm.value.phone, this.id);
      this.personServise.onEditPerson(person);
    }
    else {

      let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname, this.addForm.value.phone);
      this.personServise.onAddPerson(person);
    }

    this.router.navigate([`/list`]);
  }
}
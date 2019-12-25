import {Component, OnDestroy, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {PersonAPIService} from "./shared/services/person-api.service";
import {Person} from "./shared/models/person.model";
import {PersonService} from "./shared/services/person.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'laba15';
  persons: any;

  constructor(private personService: PersonService) {

    console.log("Constructor");
  }

  async ngOnInit() {

    this.persons = this.personService.persons;
  }

  ngOnDestroy(): void {
  }
}
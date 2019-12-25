import { Component, OnInit } from '@angular/core';
import {PersonService} from "../shared/services/person.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  fnFilter: boolean;
  lnFilter: boolean;

  srchFN = "";
  srchLN = "";

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  searchByFN() {
    this.fnFilter = !this.fnFilter;
    this.srchFN = "";
  }

  searchByLN() {
    this.lnFilter = !this.lnFilter;
    this.srchLN = "";
  }
}

import { Component, OnInit } from '@angular/core';
import {PersonService} from "../shared/services/person.service";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  
  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

}
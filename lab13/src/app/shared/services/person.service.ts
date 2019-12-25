import { Injectable } from '@angular/core';
import { API } from './API';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends API {

  header: HttpHeaders;
  url = "persons";

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }

  async getPerson() {
    return this.get (this.url, this.header).toPromise();
  }

  async postPerson(data) {
    return this.post (this.url, data, this.header).toPromise();
  }

  async putPerson(id: number, data) {
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }

  async deletePerson(id: number) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }
}


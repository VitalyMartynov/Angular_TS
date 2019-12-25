import { Injectable } from '@angular/core';
import { API } from './API';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonAPIService extends API {

  header: HttpHeaders;
  url = "persons";

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }

  async getPersons () {
    return await this.get(this.url, this.header).toPromise();
  }

  postPersons(data) {
    return this.post(this.url, data, this.header).toPromise();
  }

  putPersons(id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }

  deletePersons(id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}


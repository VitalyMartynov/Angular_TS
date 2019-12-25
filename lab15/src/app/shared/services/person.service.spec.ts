import { TestBed } from '@angular/core/testing';

import { PersonAPIService } from './person-api.service';

describe('PersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonAPIService = TestBed.get(PersonAPIService);
    expect(service).toBeTruthy();
  });
});

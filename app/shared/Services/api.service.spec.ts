/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpModule]
    });
  });

  it('should exist',
    inject([ApiService], (service: ApiService) => {
      expect(service).toBeTruthy();
    })
  );
});

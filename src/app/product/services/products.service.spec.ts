import { TestBed } from '@angular/core/testing';

import { Products } from './products.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Products = TestBed.get(Products);
    expect(service).toBeTruthy();
  });
});

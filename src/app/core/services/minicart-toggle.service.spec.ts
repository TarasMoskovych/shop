import { TestBed } from '@angular/core/testing';

import { MinicartToggleService } from './minicart-toggle.service';

describe('MinicartToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinicartToggleService = TestBed.get(MinicartToggleService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WalutyService } from './waluty.service';


describe('WalutyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalutyService = TestBed.get(WalutyService);
    expect(service).toBeTruthy();
  });
});

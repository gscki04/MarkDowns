import { TestBed } from '@angular/core/testing';

import { TwothService } from './twoth.service';

describe('TwothService', () => {
  let service: TwothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

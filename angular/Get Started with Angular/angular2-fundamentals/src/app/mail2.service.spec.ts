import { TestBed, inject } from '@angular/core/testing';

import { Mail2Service } from './mail2.service';

describe('Mail2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Mail2Service]
    });
  });

  it('should be created', inject([Mail2Service], (service: Mail2Service) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { DomSanitizationService } from './dom-sanitization.service';

describe('DomSanitizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizationService]
    });
  });

  it('should be created', inject([DomSanitizationService], (service: DomSanitizationService) => {
    expect(service).toBeTruthy();
  }));
});

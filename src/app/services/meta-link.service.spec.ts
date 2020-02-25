import { TestBed } from '@angular/core/testing';

import { MetaLinkService } from './meta-link.service';

describe('MetaLinkService', () => {
  let service: MetaLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

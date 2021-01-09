import { TestBed } from '@angular/core/testing';

import { NgxImagePreviewService } from './ngx-image-preview.service';

describe('NgxImagePreviewService', () => {
  let service: NgxImagePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImagePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

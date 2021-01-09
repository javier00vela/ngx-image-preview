import { TestBed } from '@angular/core/testing';

import { NgxImagePreviewerService } from './ngx-image-preview.service';

describe('NgxImagePreviewerService', () => {
  let service: NgxImagePreviewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImagePreviewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

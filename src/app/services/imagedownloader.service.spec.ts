import { TestBed } from '@angular/core/testing';

import { ImagedownloaderService } from './imagedownloader.service';

describe('ImagedownloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagedownloaderService = TestBed.get(ImagedownloaderService);
    expect(service).toBeTruthy();
  });
});

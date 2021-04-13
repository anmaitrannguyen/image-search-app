import { TestBed } from '@angular/core/testing';

import { ImageListApiService } from './image-list-api.service';

describe('ImageListApiService', () => {
  let service: ImageListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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

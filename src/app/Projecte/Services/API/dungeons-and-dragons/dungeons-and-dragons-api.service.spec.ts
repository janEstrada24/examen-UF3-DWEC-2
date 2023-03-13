import { TestBed } from '@angular/core/testing';

import { DungeonsAndDragonsApiService } from './dungeons-and-dragons-api.service';

describe('DungeonsAndDragonsApiService', () => {
  let service: DungeonsAndDragonsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonsAndDragonsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

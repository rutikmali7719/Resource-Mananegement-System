import { TestBed } from '@angular/core/testing';

import { TrainingserviceService } from './trainingservice.service';

describe('TrainingserviceService', () => {
  let service: TrainingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

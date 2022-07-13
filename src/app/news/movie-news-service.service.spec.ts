import { TestBed } from '@angular/core/testing';

import { MovieNewsServiceService } from './movie-news-service.service';

describe('MovieNewsServiceService', () => {
  let service: MovieNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

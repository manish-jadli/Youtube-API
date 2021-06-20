/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YoutubeApiService } from './youtube-api.service';

describe('Service: YoutubeApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeApiService]
    });
  });

  it('should ...', inject([YoutubeApiService], (service: YoutubeApiService) => {
    expect(service).toBeTruthy();
  }));
});

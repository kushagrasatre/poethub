/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicedataService } from './servicedata.service';

describe('ServicedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicedataService]
    });
  });

  it('should ...', inject([ServicedataService], (service: ServicedataService) => {
    expect(service).toBeTruthy();
  }));
});

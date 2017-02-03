/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireListService } from './angular-fire-list.service';

describe('AngularFireListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireListService]
    });
  });

  it('should ...', inject([AngularFireListService], (service: AngularFireListService) => {
    expect(service).toBeTruthy();
  }));
});

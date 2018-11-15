import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('LayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LayoutService ],
      imports: [ HttpClientModule, HttpModule ]
    });
  });

  it('should be created', () => {
    const service: LayoutService = TestBed.get(LayoutService);
    expect(service).toBeTruthy();
  });
});

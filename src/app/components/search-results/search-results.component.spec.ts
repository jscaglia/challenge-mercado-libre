import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LayoutService } from '../layout/layout.service';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let mockActivatedRoute: any;
  let mockLayoutService: any;
  const mockLayoutSubject: Subject<any> = new Subject<any>();

  let someToSearch: string = ''
  const mockSpinnerService = {
    show: jasmine.createSpy(),
    hide: jasmine.createSpy()
  };

  beforeEach(async(() => {
    mockActivatedRoute = {
      queryParams: {
        subscribe: (fn: (value: Params) => void) => fn({
          search: someToSearch,
        }),
      }
    };

    mockLayoutService = jasmine.createSpyObj('LayoutService', [ 'search' ]);
    mockLayoutService.search.and.returnValue(mockLayoutSubject);
    
    TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, HttpModule],
      providers: [
        { provide: Injector },
        { provide: Router },
        { provide: LayoutService, useValue: mockLayoutService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: NgxSpinnerService, useValue: mockSpinnerService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should not call to search when not have queryparams', () => {
    someToSearch = ''
    component.ngOnInit();
    expect(mockSpinnerService.show).toHaveBeenCalled();
    expect(mockLayoutService.search).not.toHaveBeenCalled();
  });

  it('Should get query params and call to search', () => {
    someToSearch = 'Apple'
    component.ngOnInit();
    expect(mockSpinnerService.show).toHaveBeenCalled();
    expect(mockLayoutService.search).toHaveBeenCalledWith('Apple');
  });
});

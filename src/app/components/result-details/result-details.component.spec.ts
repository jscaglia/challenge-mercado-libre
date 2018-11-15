import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultDetailsComponent } from './result-details.component';
import { NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LayoutService } from '../layout/layout.service';
import { NgxSpinnerService } from 'ngx-spinner';

describe('ResultDetailsComponent', () => {
  let component: ResultDetailsComponent;
  let fixture: ComponentFixture<ResultDetailsComponent>;
  let mockActivatedRoute: any;
  let productId: string = '';

  let mockLayoutService: any;
  const mockLayoutSubject: Subject<any> = new Subject<any>();
  
  const mockSpinnerService = {
    show: jasmine.createSpy(),
    hide: jasmine.createSpy()
  };

  beforeEach(async(() => {
    mockActivatedRoute = {
      params: {
        subscribe: (fn: (value: Params) => void) => fn({
          id: productId,
        }),
      }
    };

    mockLayoutService = jasmine.createSpyObj('LayoutService', [ 'getDescription' ]);
    mockLayoutService.getDescription.and.returnValue(mockLayoutSubject);

    TestBed.configureTestingModule({
      declarations: [ ResultDetailsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientModule, HttpModule ],
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
    fixture = TestBed.createComponent(ResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should not call to get details when not have queryparams', () => {
    productId = ''
    component.ngOnInit();
    expect(mockSpinnerService.show).toHaveBeenCalled();
    expect(mockLayoutService.getDescription).not.toHaveBeenCalled();
  });

  it('Should get query params and call to get details', () => {
    productId = '1'
    component.ngOnInit();
    expect(mockSpinnerService.show).toHaveBeenCalled();
    expect(mockLayoutService.getDescription).toHaveBeenCalledWith('1');
  });
});

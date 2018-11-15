import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

describe('AppComponent', () => {
  let layoutComponent: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: LayoutService },
        { provide: Router },
        { provide: NgxSpinnerService },
        { provide: ActivatedRoute }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(LayoutComponent);
    layoutComponent = fixture.debugElement.componentInstance;
  });

  describe('when initializing component', () => {
    it('should create', () => {
      expect(layoutComponent).toBeTruthy();
    });
  });
});

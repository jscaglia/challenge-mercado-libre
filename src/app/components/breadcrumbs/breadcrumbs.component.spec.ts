import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.breadcrumbItems = [ { text: 'Categoria 1' }, { text: 'Categoria 2' }, { text: 'Categoria 3' } ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.breadcrumbItems).toEqual([ { text: 'Categoria 1' }, { text: 'Categoria 2' }, { text: 'Categoria 3' } ]);
  });

  it('should check first item to equal false', () => {
    let result = component.isFirstItem({ text: 'Categoria 3' });
    expect(result).toBeFalsy();

    result = component.isFirstItem({ text: 'Categoria 2' });
    expect(result).toBeFalsy();

  });

  it('should check first item to equal true', () => {
    const result = component.isFirstItem({ text: 'Categoria 1' });
    expect(result).toBeTruthy();
  });

  it('should check last item to equal false', () => {
    let result = component.isLastItem({ text: 'Categoria 1' });
    expect(result).toBeFalsy();

    result = component.isLastItem({ text: 'Categoria 2' });
    expect(result).toBeFalsy();

  });

  it('should check last item to equal true', () => {
    const result = component.isLastItem({ text: 'Categoria 3' });
    expect(result).toBeTruthy();
  });
});

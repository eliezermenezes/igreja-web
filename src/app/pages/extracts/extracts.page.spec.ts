import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractsPage } from './extracts.page';

describe('ExtractsPage', () => {
  let component: ExtractsPage;
  let fixture: ComponentFixture<ExtractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

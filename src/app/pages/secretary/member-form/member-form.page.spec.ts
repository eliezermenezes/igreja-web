import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFormPage } from './member-form.page';

describe('MemberFormPage', () => {
  let component: MemberFormPage;
  let fixture: ComponentFixture<MemberFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

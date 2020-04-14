import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title in header text', () => {
    const expected = 'Loottable';
    const compiled = fixture.nativeElement;
    const actual = compiled.querySelector('#header__title-text').textContent;
    expect(actual).toBe(expected);
  });

  it('should have the theme picker', () => {
    const compiled = fixture.nativeElement;
    const actual = compiled.querySelector('#header__theme-picker');
    expect(actual).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { MockActivatedRoute } from 'test/mock-activated-route';
import { ThemePickerComponent } from './theme-picker.component';

describe('ThemePickerComponent', () => {
  let component: ThemePickerComponent;
  let fixture: ComponentFixture<ThemePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemePickerComponent],
      imports: [MaterialModule],
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should install theme based on name', () => {
    const name = 'pink-bluegrey';
    spyOn(component.styleManager, 'setStyle');
    component.installTheme(name);
    expect(component.styleManager.setStyle).toHaveBeenCalled();
    expect(component.styleManager.setStyle).toHaveBeenCalledWith(
      'theme',
      `assets/global-styles/${name}.css`
    );
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwothFormComponent } from './twoth-form.component';

describe('TwothFormComponent', () => {
  let component: TwothFormComponent;
  let fixture: ComponentFixture<TwothFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwothFormComponent]
    });
    fixture = TestBed.createComponent(TwothFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

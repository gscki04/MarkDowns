import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloFormComponent } from './solo-form.component';

describe('SoloFormComponent', () => {
  let component: SoloFormComponent;
  let fixture: ComponentFixture<SoloFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoloFormComponent]
    });
    fixture = TestBed.createComponent(SoloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

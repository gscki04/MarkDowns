import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloListComponent } from './solo-list.component';

describe('SoloListComponent', () => {
  let component: SoloListComponent;
  let fixture: ComponentFixture<SoloListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoloListComponent]
    });
    fixture = TestBed.createComponent(SoloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwothListComponent } from './twoth-list.component';

describe('TwothListComponent', () => {
  let component: TwothListComponent;
  let fixture: ComponentFixture<TwothListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwothListComponent]
    });
    fixture = TestBed.createComponent(TwothListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

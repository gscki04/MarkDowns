import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWizComponent } from './chart-wiz.component';

describe('ChartWizComponent', () => {
  let component: ChartWizComponent;
  let fixture: ComponentFixture<ChartWizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartWizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartWizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingInformationComponent } from './training-information.component';

describe('TrainingInformationComponent', () => {
  let component: TrainingInformationComponent;
  let fixture: ComponentFixture<TrainingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

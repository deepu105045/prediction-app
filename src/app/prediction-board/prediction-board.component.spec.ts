import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionBoardComponent } from './prediction-board.component';

describe('PredictionBoardComponent', () => {
  let component: PredictionBoardComponent;
  let fixture: ComponentFixture<PredictionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

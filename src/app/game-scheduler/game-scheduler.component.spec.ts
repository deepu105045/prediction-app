import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSchedulerComponent } from './game-scheduler.component';

describe('GameSchedulerComponent', () => {
  let component: GameSchedulerComponent;
  let fixture: ComponentFixture<GameSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

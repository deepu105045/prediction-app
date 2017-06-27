import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCarouselComponent } from './welcome-carousel.component';

describe('WelcomeCarouselComponent', () => {
  let component: WelcomeCarouselComponent;
  let fixture: ComponentFixture<WelcomeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

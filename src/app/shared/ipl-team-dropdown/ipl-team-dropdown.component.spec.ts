import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IplTeamDropdownComponent } from './ipl-team-dropdown.component';

describe('IplTeamDropdownComponent', () => {
  let component: IplTeamDropdownComponent;
  let fixture: ComponentFixture<IplTeamDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IplTeamDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IplTeamDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

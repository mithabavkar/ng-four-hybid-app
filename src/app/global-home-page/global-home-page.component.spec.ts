import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHomePageComponent } from './global-home-page.component';

describe('GlobalHomePageComponent', () => {
  let component: GlobalHomePageComponent;
  let fixture: ComponentFixture<GlobalHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

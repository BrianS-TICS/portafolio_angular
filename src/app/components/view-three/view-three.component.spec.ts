import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThreeComponent } from './view-three.component';

describe('ViewThreeComponent', () => {
  let component: ViewThreeComponent;
  let fixture: ComponentFixture<ViewThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

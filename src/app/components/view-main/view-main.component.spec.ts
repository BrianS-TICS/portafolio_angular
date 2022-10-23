import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainComponent } from './view-main.component';

describe('ViewMainComponent', () => {
  let component: ViewMainComponent;
  let fixture: ComponentFixture<ViewMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

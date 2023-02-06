import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordLayoutComponent } from './dashbord-layout.component';

describe('DashbordLayoutComponent', () => {
  let component: DashbordLayoutComponent;
  let fixture: ComponentFixture<DashbordLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

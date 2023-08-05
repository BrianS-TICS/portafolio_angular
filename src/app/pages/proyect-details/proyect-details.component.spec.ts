import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectDetailsComponent } from './proyect-details.component';

describe('ProyectDetailsComponent', () => {
  let component: ProyectDetailsComponent;
  let fixture: ComponentFixture<ProyectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

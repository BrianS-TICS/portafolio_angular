import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectLayoutComponent } from './proyect-layout.component';

describe('ProyectLayoutComponent', () => {
  let component: ProyectLayoutComponent;
  let fixture: ComponentFixture<ProyectLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

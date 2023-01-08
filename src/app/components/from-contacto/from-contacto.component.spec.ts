import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromContactoComponent } from './from-contacto.component';

describe('FromContactoComponent', () => {
  let component: FromContactoComponent;
  let fixture: ComponentFixture<FromContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

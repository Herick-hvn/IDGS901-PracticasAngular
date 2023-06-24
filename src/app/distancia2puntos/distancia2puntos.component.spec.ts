import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distancia2puntosComponent } from './distancia2puntos.component';

describe('Distancia2puntosComponent', () => {
  let component: Distancia2puntosComponent;
  let fixture: ComponentFixture<Distancia2puntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Distancia2puntosComponent]
    });
    fixture = TestBed.createComponent(Distancia2puntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

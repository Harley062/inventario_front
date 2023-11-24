import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEquipamentoComponent } from './consultar-equipamento.component';

describe('ConsultarEquipamentoComponent', () => {
  let component: ConsultarEquipamentoComponent;
  let fixture: ComponentFixture<ConsultarEquipamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEquipamentoComponent]
    });
    fixture = TestBed.createComponent(ConsultarEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

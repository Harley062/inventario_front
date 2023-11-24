import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEquipamentoComponent } from './alterar-equipamento.component';

describe('AlterarEquipamentoComponent', () => {
  let component: AlterarEquipamentoComponent;
  let fixture: ComponentFixture<AlterarEquipamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarEquipamentoComponent]
    });
    fixture = TestBed.createComponent(AlterarEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

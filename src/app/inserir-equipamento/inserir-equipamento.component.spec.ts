import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEquipamentoComponent } from './inserir-equipamento.component';

describe('InserirEquipamentoComponent', () => {
  let component: InserirEquipamentoComponent;
  let fixture: ComponentFixture<InserirEquipamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirEquipamentoComponent]
    });
    fixture = TestBed.createComponent(InserirEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

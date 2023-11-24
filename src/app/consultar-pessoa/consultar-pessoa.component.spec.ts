import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPessoaComponent } from './consultar-pesssoa.component';

describe('ConsultarPessoaComponent', () => {
  let component: ConsultarPessoaComponent;
  let fixture: ComponentFixture<ConsultarPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarPessoaComponent]
    });
    fixture = TestBed.createComponent(ConsultarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

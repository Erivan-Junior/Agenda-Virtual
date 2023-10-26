import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoCadastrarComponent } from './contato-cadastrar.component';

describe('ContatoCadastrarComponent', () => {
  let component: ContatoCadastrarComponent;
  let fixture: ComponentFixture<ContatoCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoCadastrarComponent]
    });
    fixture = TestBed.createComponent(ContatoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

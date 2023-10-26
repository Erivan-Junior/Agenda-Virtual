import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListarComponent } from './contato-listar.component';

describe('ContatoListarComponent', () => {
  let component: ContatoListarComponent;
  let fixture: ComponentFixture<ContatoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoListarComponent]
    });
    fixture = TestBed.createComponent(ContatoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

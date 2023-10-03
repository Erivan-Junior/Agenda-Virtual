import { Component } from '@angular/core';
import Contato from './shared/model/Contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  subtitle: string;
  newContato: Contato;
  contatosRepo: Contato[];
  erro: string;

  constructor() {
    this.title = 'Agenda-Virtual';
    this.subtitle = 'Cadastre um contato';
    this.newContato = new Contato('', '', '');
    this.contatosRepo = [];
    this.erro = ''
  }

  create(): void{
    if(this.readOne(this.newContato.numero).numero == ''){
      if(this.newContato.descricao == '')
        this.newContato.descricao = 'Novo Contato!'
      this.contatosRepo.push(this.newContato);
      this.newContato = new Contato('', '', '');
      this.erro = ''
    }
    else
      this.erro = `Você ja tem um contato com o número ${this.newContato.numero} cadastrado`
  }

  readAll(): Contato[]{
    return this.contatosRepo;
  }

  readOne(numero: string): Contato{
    let encontrado = new Contato('', '', '');
    this.contatosRepo.forEach(c => {
      if(c.numero === numero)
        encontrado = c
    });
    return encontrado;
  }

  update(contato: Contato): void{
    this.newContato = contato
    this.delete(contato)
  }

  delete(contato: Contato): void{
    this.contatosRepo.splice(
      this.contatosRepo.findIndex(c => c.numero === contato.numero)
    )
  }


}

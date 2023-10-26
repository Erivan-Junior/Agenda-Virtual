import { Component } from '@angular/core';
import Contato from '../model/Contato';
import { CONTATOS } from '../model/ContatoRepository';

@Component({
  selector: 'app-contato-cadastrar',
  templateUrl: './contato-cadastrar.component.html',
  styleUrls: ['../../../app.component.scss']
  
})
export class ContatoCadastrarComponent {

  newContato: Contato;
  erro: string;
  contatosRepo: Contato[];

  constructor(){
    this.newContato = new Contato('', '', '');
    this.erro = '';
    this.contatosRepo = CONTATOS;
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

    readOne(numero: string): Contato{
    let encontrado = new Contato('', '', '');
    this.contatosRepo.forEach(c => {
      if(c.numero === numero)
        encontrado = c
    });
    return encontrado;
  }
}

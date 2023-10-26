import { Component } from '@angular/core';
import Contato from '../model/Contato';
import { CONTATOS } from '../model/ContatoRepository';

@Component({
  selector: 'app-contato-listar',
  templateUrl: './contato-listar.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class ContatoListarComponent {

  contatosRepo: Contato[];

  constructor(){
    this.contatosRepo = CONTATOS
  }

  tamanho(): number{
    return this.contatosRepo.length
  }
    
  readAll(): Contato[]{
    return this.contatosRepo;
  }

  update(contato: Contato): void{
    console.log("SERVIÇO DE UPDATES EM CONSTRUÇÃO")
  }

  delete(contato: Contato): void{
    this.contatosRepo.splice(
      this.contatosRepo.findIndex(c => c.numero === contato.numero)
      ,1
    )
  }
}

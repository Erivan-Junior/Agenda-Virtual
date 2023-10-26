import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoCadastrarComponent } from './shared/contato/contato-cadastrar/contato-cadastrar.component';
import { ContatoListarComponent } from './shared/contato/contato-listar/contato-listar.component'

const routes: Routes = [
  {
    path: 'cadastrar', 
    component: ContatoCadastrarComponent
  },
  {
    path: 'listar',
    component: ContatoListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

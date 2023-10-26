import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  subtitle: string;

  constructor() {
    this.title = 'Agenda-Virtual';
    this.subtitle = 'Cadastre um contato';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  imports: [CommonModule],
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  mostrarListagem = false;
tamanhoFonte = 14;

listaalunos = [
  { cod: 1, nome: 'Ana', ativo: true },
  { cod: 2, nome: 'Bruno', ativo: false }
];

toggleMensagem() {
  this.mostrarListagem = !this.mostrarListagem;
}

aumentarFonte() {
  this.tamanhoFonte++;
}

diminuirFonte() {
  this.tamanhoFonte--;
}
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  imports: [CommonModule],
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  cursos = [
    { id: 123, nome: 'Ana', status: true },
    { id: 213, nome: 'Bruna', status: true },
    { id: 231, nome: 'Carlos', status: false },
    { id: 321, nome: 'Daniel', status: false }
  ]

  mostrarMensagem = true;
  toggleMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }
}
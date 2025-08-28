import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estoque',
  imports: [CommonModule],
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class EstoqueComponent {

  produtos = [
    { cod: 1, nome: 'Notebook', preco: 4000, estoque: 3, ativo: true },
    { cod: 2, nome: 'Teclado', preco: 1500, estoque: 2, ativo: false },
    { cod: 3, nome: 'Mouse', preco: 900, estoque: 10, ativo: true },
    { cod: 4, nome: 'Monitor', preco: 5000, estoque: 1, ativo: true }
  ];

  mostrarListagem = true;
  tamanhoFonte = 14;

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

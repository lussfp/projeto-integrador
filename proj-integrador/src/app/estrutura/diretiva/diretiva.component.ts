import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {
  cursos = [
    { nome: 'Angular', ativo: true },
    { nome: 'React', ativo: false },
    { nome: 'Vue', ativo: true },
    { nome: 'JavaScript', ativo: false },
  ];

  exibirLista: boolean = true;
  tamanhoFonte: number = 16;

  alternarExibicao() {
    this.exibirLista = !this.exibirLista;
  }

  aumentarFonte() {
    this.tamanhoFonte++;
  }

  diminuirFonte() {
    this.tamanhoFonte--;
  }
}

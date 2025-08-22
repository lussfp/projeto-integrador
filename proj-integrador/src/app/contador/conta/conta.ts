import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
x = 0

Incremento(){
this.x ++
}

Decremento(){
this.x--
}
}

import { Component, Input, OnInit } from '@angular/core';
import { Injectable, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input () progreso:number = 50;
  @Input() btnClass: string = "btn btn-primary";
  @Output() valorSalida: EventEmitter<number> = new EventEmitter()

  get getPorcentaje(){
    return `${this.progreso}%`  // hago la concatenacion
  }

  cambiarValor(valor:number){
    if (this.progreso >= 100 && valor >=0) {
      this.valorSalida.emit(100);
      return this.progreso =  100;
    }
    if (this.progreso <= 0 && valor <0) {
      this.valorSalida.emit(0);
      return this.progreso =  0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number = 30;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorActual: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorActual.emit(100);
      this.progreso = 100;
      return
    }
    if (this.progreso <= 0 && valor <= 0) {
      this.valorActual.emit(0);
      this.progreso = 0;
      return
    }
    this.progreso += valor;
    this.valorActual.emit(this.progreso);
  }
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  onChange(nValor: number) {
     if (nValor >= 100) {
      this.progreso = 100;
    } else
    if (nValor <= 0) {
      this.progreso = 0;
    } else
   { this.progreso = nValor;}
   console.log(this.progreso);
    this.valorActual.emit(this.progreso);
  }

}


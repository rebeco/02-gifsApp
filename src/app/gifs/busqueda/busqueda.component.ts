import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  constructor() {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value = ''; 
  }
}

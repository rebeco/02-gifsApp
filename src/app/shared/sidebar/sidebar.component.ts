import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}

  getHistorial() {
    return this.gifService.historial;
  }

  buscar(termino: string) {
    this.gifService.buscarGifs(termino);
  }
}

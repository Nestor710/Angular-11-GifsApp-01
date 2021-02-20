import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

  buscar(){
    const valor =this.txtbuscar.nativeElement.value;

    if (valor.trim().length == 0) {
      return;
    }
    
    this.gifsService.buscarGifs( valor );
    
    this.txtbuscar.nativeElement.value = '';
  }

}

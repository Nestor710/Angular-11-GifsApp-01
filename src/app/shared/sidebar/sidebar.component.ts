import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor( private gS:GifsService ) { }

  get _historial(){
    return this.gS.historial
  }


  buscar( termino:string ){

    this.gS.buscarGifs( termino  )
    
  }


}

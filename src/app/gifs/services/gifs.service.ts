import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { SearchGifsResponse, Gifs } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'yuJDMwUw3i4JcPHxujUbocUWbRDk7W7s';
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  
  public resultado:Gifs[] = [];


  get historial(){
    return [...this._historial];
  }
  
  constructor( private http: HttpClient ) { 

    this._historial = JSON.parse( localStorage.getItem('historial')!) || [];

    this.resultado = JSON.parse( localStorage.getItem('resultado')!) || [];

  }
  
  buscarGifs( termino: string = '' ){

    termino = termino.trim().toLowerCase(); 

    if ( !this._historial.includes( termino ) ) {
      this._historial.unshift( termino );
      this._historial = this._historial.splice(0,7);

      localStorage.setItem('historial', JSON.stringify( this._historial ) );
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', termino)
    .set('limit', '10');
   
    
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
    .subscribe( ( resp ) => {
      this.resultado = resp.data;
      localStorage.setItem('resultado', JSON.stringify( this.resultado ) );
              } )
               
    
  }

}

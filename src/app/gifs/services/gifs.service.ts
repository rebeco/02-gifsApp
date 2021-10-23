import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifsResults.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados =
      JSON.parse(localStorage.getItem('ultimoResultado')!) || [];
  }

  private _historial: string[] = [];

  private apiKey: string = 'sAtBPUrpNE6t0HclJk8ypE2Qed6YotUN';

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial.splice(10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const parametros = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http
      .get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search`, {
        params: parametros,
      })
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem(
          'ultimoResultado',
          JSON.stringify(this.resultados)
        );
      });
  }
}

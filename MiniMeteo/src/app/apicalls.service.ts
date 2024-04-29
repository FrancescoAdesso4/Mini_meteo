import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APICallsService {

  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }
  Token="5f74cbb44bb38add01ac5b7a0dc56d29"
  searchCW(query: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.Token}&units=metric&lang=it`;
    

    let currentW = this.http.get(url);
    return currentW;
  //Ritorno un observable ai componenti che richiedono il servizio
  }
  search5D(query: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.Token}&units=metric&lang=it`;

    let currentW = this.http.get(url);
    return currentW;
  //Ritorno un observable ai componenti che richiedono il servizio
  }




}

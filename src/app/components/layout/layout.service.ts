import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public endpoint = '';
  constructor(private http: HttpClient) {

  }

  public search(someToSearch: string): Observable<any> {
    this.endpoint = 'https://api.mercadolibre.com/sites/MLA/search?q=';

    return this.http.get<any>(this.endpoint + someToSearch)
      .pipe(
        retry(3),
        tap( // Log the result or error
          () => console.log('Get Products OK'),
          error => console.error(error)
        )
      );
  }

  public getDescription(productId: string): Observable<any> {
    this.endpoint = 'https://api.mercadolibre.com/items/';

    return this.http.get<any>(this.endpoint + productId)
      .pipe(
        retry(3),
        tap( // Log the result or error
          () => console.log('Get Products OK'),
          error => console.error(error)
        )
      );
  }

}

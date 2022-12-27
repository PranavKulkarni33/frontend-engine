import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "https://mailthis.to/frontendengine@gmail.com";

  constructor(private http: HttpClient) {

  }

  SendEmail(input: any) {
    return this.http.post(this.url, input).pipe(
      map(
        (response: any) => {
          if (response) {
            return response
          }
        },
        (error) => {
          if (error) {
            return error
          }
        }
      )
    )
  }
}

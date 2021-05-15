import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Place } from "../_models/place";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlaceService {

    constructor(
        private http: HttpClient) { }

    getPlaces(): Observable<Place[]> {
        return this.http.get<Place[]>('https://localhost:44373/api/place')
            .pipe(
                catchError(this.handleError('getPlaces', []))
            );
    }

    getPlace(id: number): Observable<Place> {
        const url = `${'https://localhost:44373/api/place'}/${id}`;
        return this.http.get<Place>(url).pipe(
          catchError(this.handleError<Place>(`getPlace id=${id}`))
        );
      }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            return of(result as T);
        };
    }
}
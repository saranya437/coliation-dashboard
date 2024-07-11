import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsListService {
  private apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
  constructor(private http: HttpClient) { }

  patientsList(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });

    return this.http.get<any>(`${this.apiUrl}/login`, { headers }).pipe(
      retry(2), 
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpResponse<any>): Observable<any> {
    if (error.status === 401) {
      console.error('Unauthorized - Invalid credentials');
    } else {
      console.error('Error occurred:', error);
    }
    return throwError('Error occurred; please try again later.');
  }
}

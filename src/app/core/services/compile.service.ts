import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompileService {

  private pseudoCodeSubject : Subject<string> = new Subject<string>();
  public pseudoCode$ = this.pseudoCodeSubject.asObservable();
  constructor(private http : HttpClient) { }

  compile(sourceCode : string) : Observable<any>{
    return this.http.post(`${environment.API_URL}/compile`, {sourceCode})
  }

  translate(sourceCode : string) : Observable<any>{
    return this.http.post(`${environment.API_URL}/translate`, {sourceCode}).pipe(
      map((result : any)=>{
        this.pseudoCodeSubject.next(result.pseudoCode);
        return result.pseudoCode
      })
    )
  }

}

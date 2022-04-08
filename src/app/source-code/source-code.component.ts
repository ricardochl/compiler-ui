import { Component, Input } from "@angular/core";
import { catchError, concatMap, throwError } from "rxjs";
import { CompileService } from "../core/services/compile.service";

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent {

  constructor(private compileService : CompileService){}

  @Input() exampleSourceCode : string = '';
  public sourceCode : string = "";
  public error: string = "";
  public compileSuccessfully: boolean = false;
  public isLoading = false;

  onChange(code : string){
   this.sourceCode = code;
  }

  compile(){
    if(!this.sourceCode) return;
    this.error = "";
    this.isLoading = true;
    this.compileService.compile(this.sourceCode).pipe(
      catchError(error=>{
        this.error = error.error;
        this.compileSuccessfully = false;
        this.isLoading = false;
        return throwError(() => error);
      })
    )
    .subscribe(()=>{
      this.compileSuccessfully = true;
      this.isLoading = false;
    })
  }

  translate(){
    if(!this.sourceCode) return;
    this.error = "";
    this.isLoading = true;
    this.compileService.translate(this.sourceCode).pipe(
      catchError(error=>{
        this.error = error.error;
        this.isLoading = false;
        return throwError(() => error);
      })
    )
    .subscribe(()=>{
      this.isLoading = false;
    })
  }

  convert(){
    if(!this.sourceCode) return;
    this.error = "";
    this.isLoading = true;
    this.compileService.compile(this.sourceCode).pipe(
      concatMap(()=> this.compileService.translate(this.sourceCode)),
      catchError(error=>{
        this.error = error.error;
        this.isLoading = false;
        return throwError(() => error);
      })
    ).subscribe(()=>{
      this.compileSuccessfully = true;
      this.isLoading = false;
    })
  }
}

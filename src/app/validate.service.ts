import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';
//import { Policy } from './policy';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  url:string="http://localhost:27523/api/Customer/Validate/"
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  getValidate(policyId:number,contactNumber:string,email:string):Observable<any>{
    return this.httpclient.get<any>(this.url+policyId+'/'+contactNumber+'/'+email,this.httpOptions).pipe(catchError(this.HandleError))
  }

  HandleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage=error.status+'\n'+error.statusText+" "+error.error;
    alert(errormessage)
   return throwError(errormessage)
  }
}

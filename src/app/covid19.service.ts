import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private httpclient:HttpClient) { }
  API='https://coronavirus-19-api.herokuapp.com/countries';
  public getAPI(){
    return this.httpclient.get(this.API);
  }
}

import { Component } from '@angular/core';
import { Covid19Service } from './covid19.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid';
  data:any = {};
  
  constructor(private covid19Service:Covid19Service){
    this.getDataAPI();
  }
  
  public getDataAPI(){
    this.covid19Service.getAPI().subscribe(
      (res)=>{
        this.data=res;
        console.log(this.data);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from "../models/country";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: Country = {
    name: 'Ireland',
    
  } 
  
  constructor(private http: HttpClient){

  }
  
  title = 'covwatch';

  ngOnInit() {
    console.log('request sending...');    
    this.getCountry();
    console.log('request sent');
  }

  async getCountry(){
    this.http.get<Country>('http://localhost:8080/api/search')
    .subscribe((data: Country) => this.country = { ...data });
  }

}

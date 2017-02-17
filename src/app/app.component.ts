import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Translator App!';

  ngOnInit(){
    this.languageSupported=[
    {text:'English',value:'en'},
    {text:'Deutsche',value:'gr'},
    {text:'Español',value:'sp'}]
  }
}

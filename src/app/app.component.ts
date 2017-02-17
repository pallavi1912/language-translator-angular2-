import { Component, OnInit } from '@angular/core';
import { TranslateService }  from './translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Translator App!';
  public translatedText: string;
  public languageSupported:any[];

  constructor(private _translateService:TranslateService){}

  ngOnInit(){
    this.languageSupported=[
    {text:'English',value:'en'},
    {text:'Deutsche',value:'gr'},
    {text:'Español',value:'sp'}
    ];

    
  }
  selectLang(lang: any){
    console.log("lang " + lang.text);
    this._translateService.use(lang.value);
    this.refreshText();
  }

  refreshText() {
      this.translatedText = this._translateService.instant('Happiness');
    }
}

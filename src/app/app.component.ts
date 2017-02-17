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

  constructor(private _translate:TranslateService){}

  ngOnInit(){
    this.languageSupported=[
    {text:'English',value:'en'},
    {text:'Deutsche',value:'gr'},
    {text:'Español',value:'sp'}
    ];

    this.selectLang('en');
  }

  isCurrentLang(lang: string) {
      // check if the selected lang is current lang
      return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
      // set current lang;
      this._translate.use(lang);
      this.refreshText();
  }

  refreshText() {
      // refresh translation when language change
      this.translatedText = this._translate.instant('welcome');
  }
  
}

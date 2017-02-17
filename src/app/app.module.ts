import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TRANSLATION_PROVIDERS, TranslateService, TranslatePipe }   from './translate';

@NgModule({
  declarations: [
    TranslatePipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TRANSLATION_PROVIDERS,TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

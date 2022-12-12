import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AngularComponent } from './angular/angular.component';
import { GitComponent } from './git/git.component';
import { ReactComponent } from './react/react.component';
import { ExpressComponent } from './express/express.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    FooterComponent,
    HeaderComponent,
    AngularComponent,
    GitComponent,
    ReactComponent,
    ExpressComponent,
    NodejsComponent,
    CheatsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

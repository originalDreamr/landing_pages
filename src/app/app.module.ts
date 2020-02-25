import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgHelperComponent} from './pages/ng-helper/ng-helper.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './fragments/header/header.component';
import {FooterComponent} from './fragments/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NgHelperComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

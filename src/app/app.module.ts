import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgHelperComponent} from './pages/ng-helper/ng-helper.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './fragments/header/header.component';
import {FooterComponent} from './fragments/footer/footer.component';
import { DownloadsComponent } from './fragments/downloads/downloads.component';
import { FooterBannerComponent } from './fragments/footer-banner/footer-banner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NgHelperComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DownloadsComponent,
    FooterBannerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import { FeaturesComponent } from './pages/features/features.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PaymentGatewayComponent } from './pages/pricing/payment-gateway/payment-gateway.component';
import { AccountingAndTaxesComponent } from './pages/pricing/accounting-and-taxes/accounting-and-taxes.component';
import { BookkeepingComponent } from './pages/services/bookkeeping/bookkeeping.component';
import { SalesTaxComponent } from './pages/services/sales-tax/sales-tax.component';
import { PayrollComponent } from './pages/services/payroll/payroll.component';
import { IncomeTaxComponent } from './pages/services/income-tax/income-tax.component';
import { GovernmentNoticeComponent } from './pages/services/government-notice/government-notice.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentProcessingComponent } from './pages/services/payment-processing/payment-processing.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PodcastComponent } from './pages/podcast/podcast.component';

@NgModule({
  declarations: [
    AppComponent,
    NgHelperComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DownloadsComponent,
    FooterBannerComponent,
    FeaturesComponent,
    HowItWorksComponent,
    PaymentGatewayComponent,
    AccountingAndTaxesComponent,
    BookkeepingComponent,
    SalesTaxComponent,
    PayrollComponent,
    IncomeTaxComponent,
    GovernmentNoticeComponent,
    NotFoundComponent,
    PaymentProcessingComponent,
    AboutUsComponent,
    PodcastComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BlogComponent } from './pages/blog/blog.component';
import {MyUtils} from './helpers/my-utils';
import { BlogsComponent } from './pages/blogs/blogs.component';
import {ShareModule} from '@ngx-share/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import { SignupTmpComponent } from './pages/signup-tmp/signup-tmp.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxCaptchaModule} from 'ngx-captcha';
import {NgxSpinnerModule} from 'ngx-spinner';
import { AlertComponent } from './fragments/alert/alert.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FileViewerComponent } from './pages/file-viewer/file-viewer.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { LcaPostingComponent } from './pages/lca-posting/lca-posting.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BlogComponent,
    BlogsComponent,
    SignupTmpComponent,
    AlertComponent,
    FileViewerComponent,
    LcaPostingComponent,
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserAnimationsModule,
        NgbModule,
        HttpClientModule, // (Required) for share counts
        // HttpClientJsonpModule, // (Optional) For Tumblr counts
        // ShareButtonsModule,
        ShareModule,
        // Register module
        NgxJsonLdModule,
        // put AppRoutingModule in last and after other modules
        AppRoutingModule,
        ReactiveFormsModule,
        NgxCaptchaModule,
        NgxSpinnerModule,
        MatDialogModule,
        PdfViewerModule,
    ],
  providers: [CookieService, MyUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }

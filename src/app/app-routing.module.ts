import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FeaturesComponent} from './pages/features/features.component';
import {HowItWorksComponent} from './pages/how-it-works/how-it-works.component';
import {PaymentGatewayComponent} from './pages/pricing/payment-gateway/payment-gateway.component';
import {AccountingAndTaxesComponent} from './pages/pricing/accounting-and-taxes/accounting-and-taxes.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BookkeepingComponent} from './pages/services/bookkeeping/bookkeeping.component';
import {GovernmentNoticeComponent} from './pages/services/government-notice/government-notice.component';
import {IncomeTaxComponent} from './pages/services/income-tax/income-tax.component';
import {PayrollComponent} from './pages/services/payroll/payroll.component';
import {SalesTaxComponent} from './pages/services/sales-tax/sales-tax.component';
import {PaymentProcessingComponent} from './pages/services/payment-processing/payment-processing.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PodcastComponent} from './pages/podcast/podcast.component';
import {BlogComponent} from './pages/blog/blog.component';
import {BlogsComponent} from './pages/blogs/blogs.component';
import {BlogResolverService} from './services/blog-resolver.service';
import {SignupTmpComponent} from './pages/signup-tmp/signup-tmp.component';
import {FileViewerComponent} from './pages/file-viewer/file-viewer.component';
import {LcaPostingComponent} from './pages/lca-posting/lca-posting.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsNConditionComponent } from './pages/terms-n-condition/terms-n-condition.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'index', redirectTo: '' },
  { path: 'features', component: FeaturesComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  // pricing
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'pricing', component: AccountingAndTaxesComponent },
  { path: 'accounting-and-taxes', component: AccountingAndTaxesComponent },
  // services
  { path: 'bookkeeping', component: BookkeepingComponent },
  { path: 'government-notice', component: GovernmentNoticeComponent },
  { path: 'income-tax', component: IncomeTaxComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'payroll-report', redirectTo: 'payroll' },
  { path: 'sales-tax', component: SalesTaxComponent },
  { path: 'payment-processing', component: PaymentProcessingComponent },
  // resources
  { path: 'about-us', component: AboutUsComponent },
  { path: 'podcast', component: PodcastComponent },
  // others and testing
  { path: 'blog/:pathName', component: BlogComponent },
  { path: 'blogs/page/:page', component: BlogsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'file/:fileName', component: FileViewerComponent },
  // temp routing
  { path: 'my-blogs', component: BlogsComponent },
  { path: 'signup', component: SignupTmpComponent },
  // LCA noticing
  { path: 'lca-noticing', component: LcaPostingComponent },
  // Footer  
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-n-condition', component: TermsNConditionComponent },

  // App broken link fix
  // app -> Paystubs
  { path: 'paystubreport/:id', redirectTo: 'file/Sample_Paystub.pdf'},
  // app -> Reports
  { path: 'deliveries/:did', redirectTo: 'file/Sample_Federal_1120_Tax_Return.pdf'},

  // { path: '**', component:  NotFoundComponent},
  { path: '404', component:  NotFoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled',
    enableTracing: false  // <-- debugging purposes only
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

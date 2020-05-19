import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {isPlatformBrowser} from '@angular/common';
import {log} from 'util';
import {RestApiService} from '../../services/rest-api.service';
import {AlertComponent} from '../../fragments/alert/alert.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup-tmp',
  templateUrl: './signup-tmp.component.html',
  styleUrls: ['./signup-tmp.component.scss']
})
export class SignupTmpComponent implements OnInit {
  signUpForm: FormGroup;
  isSubmitted = false;
  isBrowser = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userMobile: ['', Validators.required],
      captcha: ['', Validators.required],
    });
    // console.log('form:displayName', this.signUpForm.controls.displayName.errors);
    // console.log('form:email', this.signUpForm.controls.email.errors);
  }

  get form() { return this.signUpForm.controls; }

  doSignUp(value) {
    this.spinner.show();
    this.isSubmitted = true;
    // console.log('form:valid', this.signUpForm.valid);
    // const loginData = this.loginForm.value;
    // this.errorMessage = '';
    if (this.signUpForm.valid) {
      const email = this.form.email.value;
      const userName = email.split('@')[0];
      const signUpObj = {
        display_name: this.form.displayName.value,
        user_name: userName,
        user_email: email,
        user_mobile: this.form.userMobile.value,
        // password: this.password,
        // confirm_password: this.confirmpassword,
        // total_employee: this.quoteuser.empsize,
        // collect_sales_tax: this.quoteuser.empsales,
        // annual_revenue: this.quoteuser.emprevenue,
        // business_in_us: this.businessInUS,
        // transact_opt: this.transactOpt,
      };
      // console.log('signUpObj', signUpObj);
      // this.form.email.setErrors({notUnique: true});
      this.restApiService.myHttp('post', 'regWaitingList', signUpObj).subscribe(
        res => {
          this.spinner.hide();
          console.log('regWaitingList', res);
          const alertType = res.status ? 'success' : 'error';
          // open alert
          const dialogRef = this.dialog.open(AlertComponent, {
            // width: '40vw',
            // disableClose: true,
            data: {type: alertType, message: res.message}
          });
          dialogRef.afterClosed().subscribe(result => {
            if (res.status) {
              this.router.navigate(['/']);
            }
          });
        }, error => {
          console.log('Sign up error!');
          this.spinner.hide();
        }
      );
    }
  }


  formChange(value) {
    // console.log('form errors', this.signUpForm.controls);
    // console.log('form value', value);
  }

  captchaResponse(action, event?) {
    // console.log('captchaResponse', action, event);
  }
}

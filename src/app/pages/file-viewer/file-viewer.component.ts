import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss']
})
export class FileViewerComponent implements OnInit {
  fileName = null;
  files = {
    'pay-stub-sample' : '/assets/files/Sample_Paystub.pdf',
    'reports-sample' : '/assets/files/Sample_Federal_1120_Tax_Return.pdf',

  };
  fileSrc: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.fileName = this.activatedRoute.snapshot.paramMap.get('fileName');
  }

  ngOnInit(): void {
    if (this.fileName === null) {
      // redirect to 404 page
      this.router.navigate(['/404']);
    } else {
      this.fileSrc = '/assets/files/' + this.fileName;
    }
  }

  onError(event): void {
    console.log('read file error', this.fileName);
    this.router.navigate(['/404']);
  }
}

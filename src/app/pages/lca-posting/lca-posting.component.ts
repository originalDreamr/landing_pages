import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';

@Component({
  selector: 'app-lca-posting',
  templateUrl: './lca-posting.component.html',
  styleUrls: ['./lca-posting.component.scss']
})
export class LcaPostingComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
  ) { }

  ngOnInit(): void {
  }

}

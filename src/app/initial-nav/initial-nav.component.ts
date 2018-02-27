import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
// import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
// import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
@Component({
  selector: 'app-initial-nav',
  templateUrl: './initial-nav.component.html',
  styleUrls: ['./initial-nav.component.scss']
})
export class InitialNavComponent implements OnInit {

  isActive: boolean = false;

  constructor(private pageScrollService: PageScrollService) { 
  } 
  ngOnInit() {
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

}

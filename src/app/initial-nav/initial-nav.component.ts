import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
@Component({
  selector: 'app-initial-nav',
  templateUrl: './initial-nav.component.html',
  styleUrls: ['./initial-nav.component.scss']
})
export class InitialNavComponent implements OnInit {

  isActive: boolean = false;

  constructor(private smooth: SimpleSmoothScrollService) { 
  }

  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

}

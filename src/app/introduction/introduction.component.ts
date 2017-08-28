import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  // public isActive: boolean = false;
  
  // constructor(@Inject(DOCUMENT) private document: Document) { }

  

  ngOnInit() {

  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   let number = this.document.body.scrollTop;
  //   if (number > 200) {
  //     this.isActive = true;
  //   } else if (this.isActive && number < 10) {
  //     this.isActive = false;
  //   }
  // }
}

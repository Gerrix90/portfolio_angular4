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

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { 
  }

//   public goToHead2(): void {
//     let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
//     this.pageScrollService.start(pageScrollInstance);
// };    

// public scrollSomewhereHorizontally(): void {
//     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '#targetToTheRight', verticalScrolling: false});
//     this.pageScrollService.start(pageScrollInstance);
// }; 

// public goToHeadingInContainer(): void {
//     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.headingClass', scrollingViews: [this.container.nativeElement]});
//     this.pageScrollService.start(pageScrollInstance);
// };
 

  ngOnInit() {
    // this.smooth.smoothScrollToAnchor();
  }

  toggleClass() {
    // this.isActive = !this.isActive;
  }

}

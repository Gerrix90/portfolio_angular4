import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-initial-nav',
  templateUrl: './initial-nav.component.html',
  styleUrls: ['./initial-nav.component.scss']
})
export class InitialNavComponent implements OnInit {

  
// constructor(private route: ActivatedRoute) { }

navigateTo(location: string): void {
window.location.hash = location;
 
}

ngOnInit() {
    


  }

}

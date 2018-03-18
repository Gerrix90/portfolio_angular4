import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public isDesktop: boolean;
  public isActive: boolean;
  public isPresent1: boolean;
  public isPresent2: boolean;
  public isPresent3: boolean;
  public isPresent4: boolean;
  public isPresent5: boolean;
  public isPresent6: boolean;
  public isPresent7: boolean;
  public isPresent8: boolean;
  public isPresent9: boolean;
  public isPresent10: boolean;

  constructor() { }

  public config = {
    position: 'bottom'
  };

  enter(skillNumber) {
    this[`isPresent${skillNumber}`] = true;
  }

  ngOnInit() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      this.isDesktop = true;
      this.isActive = false;
    } else {
      this.isDesktop = false;
      this.isActive = true;
    }
  }
}

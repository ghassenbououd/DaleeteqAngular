import { Injectable, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Injectable()
export class GlobaleService implements OnInit {
  public blnDisplayMenu: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
    console.log("from service", this.route.url)
  }

  getURLInfo() {
    if (this.route.url == '/login'||this.route.url=='/inscription') {
      return false;
    }
    else {
      return true;
    }
  }
}

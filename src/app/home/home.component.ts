import {Component, OnInit} from '@angular/core';
import {GlobaleService} from '../shared/globale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GlobaleService]
})
export class HomeComponent implements OnInit {
  location: boolean;

  constructor(private global: GlobaleService) {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.location = this.global.getURLInfo();
    console.log(this.location);
  }

}

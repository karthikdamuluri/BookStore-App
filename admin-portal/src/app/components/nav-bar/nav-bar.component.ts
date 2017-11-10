import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;
  constructor() { }

  adminPage(){
    this.loggedIn = !this.loggedIn;
  }
  ngOnInit() {
  }

}

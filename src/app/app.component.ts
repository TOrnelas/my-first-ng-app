import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Subscription} from "rxjs";
import {SideMenuComponent} from "./side-menu/side-menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  @ViewChild('sideBarComponent') sideBar: SideMenuComponent;

  @ViewChild('sideMenu') sideMenu: MatSidenav;

  @Input() menuOpened = false;

  menuCloseSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.menuCloseSubscription = this.sideMenu.closedStart.subscribe(
      () => this.menuOpened = false
    );
  }

  ngOnDestroy(): void {
    this.menuCloseSubscription.unsubscribe();
  }
}

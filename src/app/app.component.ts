import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sideMenu') sideMenu: MatSidenav;

  menuOpened = false;

  menuCloseSubscription: Subscription;

  ngOnInit() {
    this.menuCloseSubscription = this.sideMenu.closedStart.subscribe(
      () => {
        this.menuOpened = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.menuCloseSubscription.unsubscribe();
  }
}

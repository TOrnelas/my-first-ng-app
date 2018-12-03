import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common'
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  @Output() menuClickedEmitter = new EventEmitter<void>();
  displayBackArrow = false;

  constructor(private location: Location,
              private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.detailsPageEventEmitter.subscribe(
      (isOnDetailsPage: boolean) => {
        this.displayBackArrow = isOnDetailsPage
      }
    );
  }

  onMenuClicked() {
    this.menuClickedEmitter.emit();
  }

  onBackArrowClicked() {
    this.location.back()
  }

  ngOnDestroy(): void {
    this.navigationService.detailsPageEventEmitter.unsubscribe()
  }
}

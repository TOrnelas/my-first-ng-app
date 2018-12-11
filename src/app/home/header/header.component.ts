import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common'
import {NavigationService} from "../../services/navigation.service";
import {Content} from "../../models/content";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// todo disable title routerlink on toolbar title when on certain pages (like details page, where the content title is displayed)
export class HeaderComponent implements OnInit, OnDestroy{

  @Output() menuClickedEmitter = new EventEmitter<void>();
  displayBackArrow = false;
  toolbarTitle = null;

  constructor(private location: Location,
              private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.detailsPageEventEmitter.subscribe(
      (content: Content) => {
        this.displayBackArrow = content != null;
        this.toolbarTitle = content != null ? ( content.name || content.title) : null;
      }
    );
  }

  getToolbarTitle() {
    return this.toolbarTitle == null ? "Movies and series browser" : this.toolbarTitle;
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

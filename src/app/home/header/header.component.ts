import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  mobile = false;
  @Output() menuClickedEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 500) { // 768px portrait
      this.mobile = true;
    }
  }

  onMenuClicked() {
    this.menuClickedEmitter.emit();
  }
}

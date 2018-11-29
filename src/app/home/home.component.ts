import {AfterContentInit, Component, HostListener, OnInit} from '@angular/core';
import {Content} from "../models/content";
import {MovieDatabaseService} from "../services/movie-database.service";
import {ContentListResponse} from "../models/content-list-response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit{

  columns = 6;
  contentList: Content[] = [];

  constructor(private movieDatabaseService: MovieDatabaseService) { }

  @HostListener('window:resize', ['$event']) // todo onload not applying
  onResize(event) {
    this.calcNumColumns(event.target.innerWidth);
  }

  private calcNumColumns(screenWidth: number) {
    if (screenWidth < 600) {
      this.columns = 2;
    }else if (screenWidth < 800) {
      this.columns = 3;
    }else if (screenWidth < 1200){
      this.columns = 4;
    }else  if (screenWidth < 2000){
      this.columns = 4;
    }else{
      this.columns = 6;
    }
  }

  ngAfterContentInit() {
    this.calcNumColumns(window.innerWidth);
  }

  ngOnInit() {
    this.movieDatabaseService.getContent('movies', 'popularity.desc', 1).subscribe(
      (response: ContentListResponse) => {
        this.contentList = this.contentList.concat(response.results);
      },
      (error) => {
        console.log(error);
      }
    );

    this.movieDatabaseService.getContent('shows', 'popularity.desc', 1).subscribe(
      (response: ContentListResponse) => {
        this.contentList = this.contentList.concat(response.results);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

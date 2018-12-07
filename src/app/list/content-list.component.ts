import { AfterContentInit, Component, HostListener, OnInit } from '@angular/core';
import { Content } from "../models/content";
import { MovieDatabaseService } from "../services/movie-database.service";
import { ContentListResponse } from "../models/content-list-response";
import { MatSelectChange, MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit, AfterContentInit {

  contentType = 'movies';
  contentList: Content[] = [];
  filters = [
    { id: 'release_date.desc', title: 'Most recent'}, { id: 'popularity.desc', title: 'Most popular'},
    { id: 'revenue.desc', title: 'Most profitable'}, { id: 'vote_average.desc', title: 'Highest rating'}
  ];
  columns = 6;
  currentPage = 1;
  lastSearchedFilter = localStorage.getItem('last_filter') || 'popularity.desc';
  selected = this.lastSearchedFilter;

  constructor(private movieService: MovieDatabaseService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.contentType = this.route.snapshot.url[0].path;
    this.getContent();
  }

  ngAfterContentInit() {
    this.calcNumColumns(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcNumColumns(event.target.innerWidth);
  }

  private calcNumColumns(screenWidth: number) {
    if (screenWidth < 600) { this.columns = 2; } else
    if (screenWidth < 800) { this.columns = 4; } else
    if (screenWidth < 1200){ this.columns = 6; } else
    if (screenWidth < 2000){ this.columns = 8; } else
    { this.columns = 10; }
  }

  onSubmit(matSelectChange: MatSelectChange) {
    this.currentPage = 1;
    this.getContent(matSelectChange.value)
  }

  getContent(filter?: string) { // must increment (if needed) the this.currentPage variable before calling this method

    if (this.currentPage == 1) { this.contentList = []; }
    else { this.contentList.splice(-1,1) }

    if (!filter) {
      filter = this.lastSearchedFilter;
    }

    localStorage.setItem('last_filter', filter);

    this.lastSearchedFilter = filter;

    this.movieService.getContent(this.contentType, filter, this.currentPage ).subscribe(
      (response: ContentListResponse) => {
        this.contentList = this.contentList.concat(response.results);
        if (this.contentList.length < response.total_results) {
          this.contentList.push(new Content(true))
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onMovieClicked(content: Content){
    if (content.isDummy) { // load more list
      this.currentPage++;
      this.getContent()
    }else {
      this.router.navigate([ content.id ], { relativeTo: this.route })
    }
  }
}

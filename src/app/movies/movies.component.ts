import { AfterContentInit, Component, HostListener, OnInit } from '@angular/core';
import { Movie } from "../models/movie";
import { MovieDatabaseService } from "../services/movie-database.service";
import { MovieResponse } from "../models/movie-response";
import {MatSelectChange} from "@angular/material";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterContentInit {

  movies: Movie[] = [];
  filters = [
    { id: 'release_date.desc', title: 'Most recent'}, { id: 'popularity.desc', title: 'Most popular'},
    { id: 'revenue.desc', title: 'Most profitable'}, { id: 'vote_average.desc', title: 'Highest rating'}
  ];
  columns = 6;
  currentPage = 1;
  lastSearchedFilter = 'popularity.desc';

  constructor(private movieService: MovieDatabaseService) { }

  ngOnInit() {
    this.getMovies();
  }

  @HostListener('window:resize', ['$event']) // todo onload not applying
  onResize(event) {
    this.calcNumColumns(event.target.innerWidth);
  }

  private calcNumColumns(screenWidth: number) {
    if (screenWidth < 600) {
      this.columns = 2;
    }else if (screenWidth < 800) {
      this.columns = 4;
    }else if (screenWidth < 1200){
      this.columns = 6;
    }else  if (screenWidth < 2000){
      this.columns = 8;
    }else{
      this.columns = 10;
    }
  }

  ngAfterContentInit() {
    this.calcNumColumns(window.screen.width);
  }

  onSubmit(matSelectChange: MatSelectChange) {
    this.currentPage = 1;
    this.getMovies(matSelectChange.value)
  }

  getMovies(filter?: string) { // must increment (if needed) the this.currentPage variable before calling this method
    // todo loading indicator

    if (this.currentPage == 1) { this.movies = []; }
    else { this.movies.splice(-1,1) }

    if (!filter) {
      filter = this.lastSearchedFilter;
    }

    this.lastSearchedFilter = filter;

    this.movieService.getMovies(filter, this.currentPage ).subscribe(
      (response: MovieResponse) => {
        this.movies = this.movies.concat(response.results);
        this.movies.push(new Movie(true))
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onMovieClicked(movie: Movie){
    if (movie.isDummy) { // load more movies
      this.currentPage++;
      this.getMovies()
    }else {
      // todo load details page for that movie
    }
  }
}

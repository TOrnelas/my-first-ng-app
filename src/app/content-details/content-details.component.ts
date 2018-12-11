import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Content} from "../models/content";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieDatabaseService} from "../services/movie-database.service";
import {NavigationService} from "../services/navigation.service";
import {HttpErrorResponse} from "@angular/common/http";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {Person} from "../models/person";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit, OnDestroy {

  content: Content;
  currentPage = 0;

  @ViewChild('tagline') tagline: ElementRef;

  constructor(private route: ActivatedRoute,
              private movieDatabaseService: MovieDatabaseService,
              private navigationService: NavigationService,
              private router: Router) { }

  ngOnInit() {

    this.movieDatabaseService.getContentDetails(this.route.snapshot.url[0].path, this.route.snapshot.params['id'])
      .subscribe(
        (response: Content) => {
          this.content = response;
          this.navigationService.detailsPageEventEmitter.emit(this.content);
        },
        (error: HttpErrorResponse) =>{
          if (error.status == 404){ //movie/show not found
            this.router.navigate(['/not-found']);
          }else{
            console.log(error)// todo handle error
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.navigationService.detailsPageEventEmitter.emit(null)
  }

  getNumColumns() {
    return 6; // todo this must return a dynamic value
  }

  getCurrentActors() {
    let startingIndex = this.currentPage * this.getNumColumns();
    return this.content.credits.cast.slice(startingIndex, startingIndex + this.getNumColumns());
  }

  incrementPage(){ // todo use this with arrows
    if (this.currentPage < Math.ceil(this.content.credits.cast.length / this.getNumColumns()) - 1)
      this.currentPage ++;
    else
      this.currentPage = 0;
  }

  decrementPage(){ // todo use this with arrows
    if (this.currentPage > 0)
      this.currentPage --;
    else
      this.currentPage = Math.ceil(this.content.credits.cast.length / this.getNumColumns() - 1) ;
  }
}

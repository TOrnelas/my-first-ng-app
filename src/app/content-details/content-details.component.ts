import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Content} from "../models/content";
import {ActivatedRoute} from "@angular/router";
import {MovieDatabaseService} from "../services/movie-database.service";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit, OnDestroy {

  content: Content;
  @ViewChild('tagline') tagline: ElementRef;

  constructor(private route: ActivatedRoute,
              private movieDatabaseService: MovieDatabaseService,
              private navigationService: NavigationService) { }

  ngOnInit() {

    this.movieDatabaseService.getContentDetails(this.route.snapshot.url[0].path, this.route.snapshot.params['id'])
      .subscribe(
        (response: Content) => {
          this.content = response;
          this.navigationService.detailsPageEventEmitter.emit(this.content);
        },
        (error) => console.log(error)// todo handle error
      );
  }

  ngOnDestroy(): void {
    this.navigationService.detailsPageEventEmitter.emit(null)
  }
}

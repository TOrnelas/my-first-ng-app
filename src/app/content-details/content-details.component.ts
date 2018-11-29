import { Component, OnInit } from '@angular/core';
import {Content} from "../models/content";
import {ActivatedRoute} from "@angular/router";
import {MovieDatabaseService} from "../services/movie-database.service";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {

  content: Content;

  constructor(private route: ActivatedRoute,
              private movieDatabaseService: MovieDatabaseService) { }

  ngOnInit() {

    this.movieDatabaseService.getContentDetails(this.route.snapshot.url[0].path, this.route.snapshot.params['id'])
      .subscribe(
        (response: Content) => {
          this.content = response;
        },
        (error) => {
          console.log(error); // todo handle error
        }
      );
  }

}

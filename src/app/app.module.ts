import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './home/header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIcon, MatListModule, MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { MoviesComponent } from './movies/movies.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ShowsComponent } from './shows/shows.component';
import {PosterImagePipe} from "./pipes/poster-image.pipe";
import {HttpClientModule} from "@angular/common/http";
import {MovieDatabaseService} from "./services/movie-database.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MatIcon,
    MoviesComponent,
    SideMenuComponent,
    ShowsComponent,
    PosterImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule
  ],
  providers: [MovieDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

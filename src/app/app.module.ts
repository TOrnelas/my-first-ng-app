import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './home/header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule,
  MatListModule, MatRippleModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { ContentListComponent } from './list/content-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {PosterImagePipe} from "./pipes/poster-image.pipe";
import {HttpClientModule} from "@angular/common/http";
import {MovieDatabaseService} from "./services/movie-database.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentListComponent,
    SideMenuComponent,
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
    MatRippleModule,
    MatSnackBarModule,
    MatIconModule
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
    MatRippleModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [MovieDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

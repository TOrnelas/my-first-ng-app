import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { ContentListComponent } from "./list/content-list.component";
import {ContentDetailsComponent} from "./content-details/content-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: ContentListComponent },
  { path: 'movies/:id', component: ContentDetailsComponent },
  { path: 'shows', component: ContentListComponent },
  { path: 'shows/:id', component: ContentDetailsComponent },
  { path: '**', component: NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

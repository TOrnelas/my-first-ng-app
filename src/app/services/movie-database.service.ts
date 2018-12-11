import  {Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ContentListResponse } from "../models/content-list-response";
import {Content} from "../models/content";

@Injectable()
export class MovieDatabaseService {

  private API_KEY = '9c8a3badf8660ed8e756140ea8afda51';
  private API_BASE_URL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getContent(contentType: string, filterBy: string, page: number) {

    let queryParams = {
      sort_by: filterBy,
      api_key: this.API_KEY,
      language: navigator.language,
      page: page.toString(),
      'vote_count.gte': contentType === 'movies' ? '1000' : '100' // filter rubbish content
    };

    return this.http.get<ContentListResponse>(
      this.API_BASE_URL + 'discover/' +  (contentType === 'movies' ? 'movie' : 'tv'),
      { params: queryParams }
    )
  }

  getContentDetails(contentType: string, contentId: string) {

    let queryParams = {
      api_key: this.API_KEY,
      language: navigator.language,
      'append_to_response': 'videos,credits,similar'
    };

    return this.http.get<Content>(
      this.API_BASE_URL + (contentType === 'movies' ? 'movie' : 'tv')+ '/' +  contentId,
      { params: queryParams }
    )
  }
}

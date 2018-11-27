import  {Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ContentListResponse } from "../models/content-list-response";

@Injectable()
export class MovieDatabaseService {

  private API_KEY = '9c8a3badf8660ed8e756140ea8afda51';
  private API_BASE_URL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getContent(contentType: string, filterBy: string, page: number) {

    let queryParams = {
      sort_by: filterBy,
      api_key: this.API_KEY,
      language: 'en',
      page: page.toString(),
      'vote_count.gte': contentType === 'movies' ? '1000' : '100'
    };

    return this.http.get<ContentListResponse>(
      this.API_BASE_URL + 'discover/' +  (contentType === 'movies' ? 'movie' : 'tv'),
      { params: queryParams }
    )
  }
}

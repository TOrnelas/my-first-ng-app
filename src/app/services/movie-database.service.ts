import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MovieResponse} from "../models/movie-response";

@Injectable()
export class MovieDatabaseService {

  private API_KEY = '9c8a3badf8660ed8e756140ea8afda51';
  private API_BASE_URL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getMovies(filterBy: string, page: number) { // todo pagination

    let queryParams = {
      sort_by: filterBy,
      api_key: this.API_KEY,
      language: 'en',
      page: page.toString(),
      'vote_count.gte': '1000'
    };

    return this.http.get<MovieResponse>(
      this.API_BASE_URL + 'discover/movie',
      {
        params: queryParams
      }
    )
  }
}

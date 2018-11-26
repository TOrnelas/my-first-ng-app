import { Movie } from "./movie";

export class MovieResponse {
  constructor(public page: number,
              public totalResults: number,
              public totalPages: number,
              public results: Movie[]) { }
}

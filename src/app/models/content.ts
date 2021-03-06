import { Credits } from "./credits";

export class Content {
  constructor(public isDummy: boolean,
              public voteCount?: number,
              public id?: number,
              public video?: boolean,
              public vote_average?: number,
              public title?: string,
              public name?: string,
              public popularity?: number,
              public poster_path?: string,
              public originalLanguage?: string,
              public original_title?: string,
              public backdrop_path?: string,
              public adult?: boolean,
              public overview?: string,
              public release_date?: string,
              public revenue?: number,
              public homepage?: string,
              public runtime?: number,
              public movie = false,
              public tagline?: string,
              public credits?: Credits
              ) {}
}

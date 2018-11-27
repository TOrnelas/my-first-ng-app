export class Content {
  constructor(public isDummy: boolean,
              public voteCount?: number,
              public id?: number,
              public video?: boolean,
              public voteAverage?: number,
              public title?: string,
              public popularity?: number,
              public poster_path?: string,
              public originalLanguage?: string,
              public original_title?: string,
              public backdropPath?: string,
              public adult?: boolean,
              public overview?: string,
              public releaseDate?: string
              ) {}
}

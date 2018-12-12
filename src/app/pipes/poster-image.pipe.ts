import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'posterImage'
})
export class PosterImagePipe implements PipeTransform { // todo maybe refactor this to suport all images

  transform(value: string) {
    if (value)
      return 'https://image.tmdb.org/t/p/w300' + value;
    else
      return 'assets/poster_placeholder.png' // todo figure out with /my-first-ng-app/ needs to be prepended when deploying
  }
}

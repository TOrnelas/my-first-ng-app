import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'posterImagePathPipe'
})
export class PosterImagePipe implements PipeTransform { // todo maybe refactor this to suport all images

  transform(value: string) {
    if (value)
      return 'https://image.tmdb.org/t/p/w500' + value;
    else return '/my-first-ng-app/assets/poster_placeholder.png'
  }
}

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'backdropImagePathPipe'
})
export class BackdropImagePipe implements PipeTransform { // todo maybe refactor this to suport all images

  transform(value: string) {
    console.log(value);
    if (value)
      return 'https://image.tmdb.org/t/p/w500' + value;
    else
      return '/my-first-ng-app/assets/poster_placeholder.png' // todo figure out with /my-first-ng-app/ needs to be prepended when deploying
  }
}

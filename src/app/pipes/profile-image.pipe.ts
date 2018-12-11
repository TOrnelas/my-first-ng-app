import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'profileImage'
})
export class ProfileImagePipe implements PipeTransform { // todo maybe refactor this to suport all images

  transform(value: string, arg: number) {
    if (value)
      return 'https://image.tmdb.org/t/p/w' + (arg ? arg : 500) + value;
    else
      return '/my-first-ng-app/assets/profile_placeholder.png' // todo figure out with /my-first-ng-app/ needs to be prepended when deploying
  }
}

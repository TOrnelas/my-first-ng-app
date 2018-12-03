import {EventEmitter} from "@angular/core";
import {Content} from "../models/content";

export class NavigationService {

  detailsPageEventEmitter = new EventEmitter<Content>()
}

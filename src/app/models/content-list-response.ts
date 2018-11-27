import { Content } from "./content";

export class ContentListResponse {
  constructor(public page: number,
              public total_results: number,
              public total_pages: number,
              public results: Content[]) { }
}

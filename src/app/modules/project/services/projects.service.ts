import {Injectable} from "@angular/core";
import {IPaginationParams} from "@schemas/core-data/pagination-params";

@Injectable()
export class ProjectsService {
  public pagination = {
    limit: 0,
    page: 0,
    count: 0
  }

  getPagination(): IPaginationParams {
    return this.pagination;
  }

}

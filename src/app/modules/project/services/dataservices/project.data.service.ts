import {Injectable} from "@angular/core";
import {BaseDataService} from "@core/services/base.data.service";
import {Observable, of} from "rxjs";
import {IProjectListItem} from "../../schemas/project-list-item";
import {IPaginationParams} from "@schemas/core-data/pagination-params";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService extends BaseDataService {

  public getProjectsList(pagination: IPaginationParams): Observable<IProjectListItem[]> {
    let counter = 0;
    let title = 'a'
    let description = 'd'
    let location = 'l'
    const projects = Array(20).fill(null).map(() => {
      description += 'd'
      title += 't';
      location += 'l'
      return {
        id: ++counter,
        applied: false,
        description,
        title,
        location: location.split(''),

      }
    })
    console.log(projects)
    return of(projects)
  }
}

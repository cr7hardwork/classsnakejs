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
    return this.get('/project');
  }
}

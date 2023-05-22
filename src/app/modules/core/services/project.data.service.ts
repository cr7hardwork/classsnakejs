import {Injectable} from "@angular/core";
import {BaseDataService} from "@core/services/base.data.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService extends BaseDataService {


  public create(projectData: any): Observable<void> {
    return this.post('/project', projectData);
  }
}


import {Component, OnInit} from '@angular/core';
import {ProjectDataService} from "../services/dataservices/project.data.service";
import {Observable, of} from "rxjs";
import {IProjectListItem} from "../schemas/project-list-item";
import {ProjectsService} from "../services/projects.service";

@Component({
  selector: 'si-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ProjectsService]
})
export class SearchComponent implements OnInit {

  public projects$: Observable<IProjectListItem[]> = of([]);


  constructor(private projectDataService: ProjectDataService, private projectsService: ProjectsService) {
  }

  public ngOnInit(): void {
    this.getProjectsList();

  }

  public getProjectsList(): void {
    const pagination = this.projectsService.getPagination();
    this.projects$ = this.projectDataService.getProjectsList(pagination)
  }
}


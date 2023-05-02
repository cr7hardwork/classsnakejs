import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {IProjectListItem} from "../../schemas/project-list-item";

@Component({
  selector: 'si-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {
  @Input() projects$: Observable<IProjectListItem[]> = of([])

  ngOnInit() {
  }
}

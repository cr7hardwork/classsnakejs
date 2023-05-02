import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProjectListItem} from "../../../schemas/project-list-item";

@Component({
  selector: 'si-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectListItemComponent {
  @Input() project!: IProjectListItem
}

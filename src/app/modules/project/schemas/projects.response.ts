import {IProjectListItem} from "./project-list-item";

export interface IProjectsResponse {
  count: number;
  list: IProjectListItem[];
  limit: number;
  page: number;
}

import { Injectable } from '@angular/core';
import { projects } from '../mock/projects.mock';
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  proj = projects;
  constructor() { }

  getAllProjects() {
    return this.proj;
  }
}

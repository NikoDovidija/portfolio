import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { projects } from '../../mock/projects.mock';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  private projectService: ProjectServiceService;
  private projects;
  constructor(projectService: ProjectServiceService) {
    this.projectService = projectService;
    this.projects = this.projectService.getAllProjects();
  }

  ngOnInit() {
  }

}

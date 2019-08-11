import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from "../../mock/projects.mock";
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  proj = projects;
  constructor() { }

  ngOnInit() {
  }

}

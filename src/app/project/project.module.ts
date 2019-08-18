import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { LazyloadDirective } from './lazyload.directive';
@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent, ProjectsComponent, LazyloadDirective],
  imports: [
    CommonModule,
  ],
  exports: [ProjectItemComponent, ProjectListComponent, ProjectsComponent]
})
export class ProjectModule { }

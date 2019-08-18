import { ProjectType } from '../mock/projects.mock';

export class Project {
    id: number;
    title: string;
    descp: string;
    thumbnail: string;
    thumbnailShow: boolean;
    projectType: ProjectType;
    stack: string[];
}

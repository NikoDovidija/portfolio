import { Project } from '../model/project';

export enum PType {
    WEBAPP = "Web application",
    MOBILEAPP = "Mobile application"
}

export enum SourceType {
    GITHUB = "Github",
    PRIVATEREPO = "Private repository",
}
export class ProjectType {
    type: PType;
    source: SourceType ;
    url: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Balanse',
        descp: 'A colaborative project for transaction management',
        thumbnail: 'balanse.png',
        stack: [ 'Angular 8', '.NET core'],
        projectType:
            {
                type: PType.WEBAPP,
                source: SourceType.GITHUB,
                url: 'https://github.com/NikoDovidija/balanse',
            }
    },
    {
        id: 2,
        title: 'Visit Murska Sobota',
        descp: 'A tourism oriented web page made for a public institution',
        thumbnail: 'vms.png',
        stack: ['Wordpress', 'Javascript'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.PRIVATEREPO,
            url: 'https://visitmurskasobota.si/',
        }
    },
    {
        id: 3,
        title: 'Playlistr',
        descp: 'A Vue.js and Laravel based webapp for music playback',
        thumbnail: '',
        stack: ['Vue.js', 'Laravel'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://visitmurskasobota.si/',
        }
    },
    {
        id: 3,
        title: 'GMT mobile app',
        descp: 'Native applications for Andorid and IOS.',
        thumbnail: '',
        stack: ['Java', 'Swift3'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://visitmurskasobota.si/',
        }
    },
    {
        id: 4,
        title: 'Nest js api',
        descp: 'An example CRUD api with NESTJS',
        thumbnail: '',
        stack: ['Node JS'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://visitmurskasobota.si/',
        }
    },
]


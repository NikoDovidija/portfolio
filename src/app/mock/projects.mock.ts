import { Project } from '../model/project';

export enum PType {
    WEBAPP = 'Web application',
    MOBILEAPP = 'Mobile application'
}

export enum SourceType {
    GITHUB = 'Github',
    PRIVATEREPO = 'Private repository',
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
        thumbnailShow: false,
        stack: [ 'Angular 8', '.NET core', 'Mssql'],
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
        thumbnailShow: false,
        stack: ['Wordpress', 'Javascript', 'Mysql'],
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
        thumbnailShow: false,
        stack: ['Vue.js', 'Laravel', 'Mysql'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://github.com/NikoDovidija/playlistr',
        }
    },
    {
        id: 3,
        title: 'GMT mobile app',
        descp: 'Native applications for Andorid and IOS.',
        thumbnail: '',
        thumbnailShow: false,
        stack: ['Java', 'Swift3', 'Laravel', 'Mysql'],
        projectType:
        {
            type: PType.MOBILEAPP,
            source: SourceType.PRIVATEREPO,
            url: '',
        }
    },
    {
        id: 4,
        title: 'Nest.js api',
        descp: 'An example CRUD api with NESTJS framework, Node.js and MongoDb',
        thumbnail: '',
        thumbnailShow: false,
        stack: ['Node JS', 'Nest js', 'Typescript', 'MongoDb'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://github.com/NikoDovidija/nestjs_crud_api',
        }
    },
    {
        id: 5,
        title: 'Express.js api',
        descp: 'An example of a CRUD api using Node.js and Express with MongoDb',
        thumbnail: '',
        thumbnailShow: false,
        stack: ['Node JS', 'ES6', 'MongoDb', 'Mongoose'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://github.com/NikoDovidija/MongoExpressMongooseApi',
        }
    },
    {
        id: 6,
        title: '.NET CORE webapp',
        descp: 'A .NET core webapp project with basic boostrap frontend',
        thumbnail: '',
        thumbnailShow: false,
        stack: ['.NET CORE', 'Boostrap', 'C#', 'MSSQL'],
        projectType:
        {
            type: PType.WEBAPP,
            source: SourceType.GITHUB,
            url: 'https://github.com/NikoDovidija/sportsstore',
        }
    },
];


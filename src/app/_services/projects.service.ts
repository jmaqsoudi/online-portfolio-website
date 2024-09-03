import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Online Portfolio Website",pictures: ["../../assets/IMGonlineportfolio1.png","../../assets/IMGonlineportfolio2.png"],projectLink: "//www.github.com",summary: "Angular and Bootstrap project to show my profile",description: "This a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and Angular",tags: [Tag.ANGULAR,Tag.BOOTSTRAP]},
    {id: 1, name: "Sample1",pictures: ["../../assets/IMGonlineportfolio1.png","../../assets/IMGonlineportfolio2.png"],projectLink: "//www.github.com",summary: "Angular and Bootstrap project to show my profile",description: "This a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and Angular",tags: [Tag.JAVA, Tag.TYPESCRIPT]},
    {id: 2, name: "Sample2",pictures: ["../../assets/IMGonlineportfolio1.png","../../assets/IMGonlineportfolio2.png"],projectLink: "//www.github.com",summary: "Angular and Bootstrap project to show my profile",description: "This a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and Angular",tags: [Tag.PYTHON, Tag.CSHARP]},
    {id: 3, name: "Sample3",pictures: ["../../assets/IMGonlineportfolio1.png","../..assets//IMGonlineportfolio2.png"],projectLink: "//www.github.com",summary: "Angular and Bootstrap project to show my profile",description: "This a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and AngularThis a comprehensive project using Bootstrap and Angular",tags: [Tag.JAVASCRIPT, Tag.JAVA, Tag.TYPESCRIPT]}
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project {

    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches the id: '+id);
    }
    return project;

  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag)==false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}

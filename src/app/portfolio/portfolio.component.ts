import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;

  angular: boolean = false;
  typeScript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  javascript: boolean = false;
  react: boolean = false;
  bootstrap: boolean = false;

  filtering: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Jamila Maqsoudi - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filteredTags: Tag[]= [];

    if(this.angular){
      filteredTags.push(Tag.ANGULAR);
    }
    if(this.typeScript){
      filteredTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filteredTags.push(Tag.PYTHON);
    }
    if(this.csharp){
      filteredTags.push(Tag.CSHARP);
    }
    if(this.java){
      filteredTags.push(Tag.JAVA);
    }
    if(this.nodejs){
      filteredTags.push(Tag.NODEJS);
    }
    if(this.aspnet){
      filteredTags.push(Tag.ASPNET);
    }
    if(this.javascript){
      filteredTags.push(Tag.JAVASCRIPT);
    }
    if(this.react){
      filteredTags.push(Tag.REACT);
    }
    if(this.bootstrap){
      filteredTags.push(Tag.BOOTSTRAP);
    }
    if(this.python || this.csharp || this.java || this.angular || this.typeScript || this.nodejs || this.aspnet || this.javascript || this.react || this.bootstrap){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filteredTags);
  }

  ResetFilters(){
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.angular = false;
    this.typeScript = false;
    this.nodejs = false;
    this.aspnet = false;
    this.javascript = false;
    this.react = false;
    this.bootstrap = false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}

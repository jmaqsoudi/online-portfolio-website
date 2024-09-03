import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperinceOpen: boolean = false;
  isEducationOpen: boolean = false
  isCertificationOpen: boolean = false
  isSkillsOpen: boolean = false
  isLanguagesOpen: boolean = false


  constructor(private titleService: Title, private renderer : Renderer2){
    this.titleService.setTitle('Jamila Maqsoudi - Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download','Resume.pdf');
    link.click();
    link.remove();
  }
}

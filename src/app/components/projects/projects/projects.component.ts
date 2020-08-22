import { Project } from './../../../models/project';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public FitnessCalanaderSkills: string[] = ['Angular', 'Typescript', 'HTML5', 'CSS/SCSS', 'MySQL'];
  public SnikieSkills: string[] = ['Angular', 'Typescript', 'HTML5', 'CSS/SCSS', 'Firebase'];
  public imagePath = "../../../../assets/images/no-image.jpg";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  public goToHome() {
    this.router.navigateByUrl('/home');
  }

  public goToResume() {
    this.router.navigateByUrl('/resume');
  }

  public loadProjects() {
    this.projects.push({title: 'Mini-Game', image: null, skill: String['Java'], description: 'A 2-D Survival Game'});
    this.projects.push({title: 'EbayAmazon', image: null, skill: String['Java'], description: 'An eccomerce software that lets users buy, sell, and bid on items.'});
    this.projects.push({title: 'Fitness Calander', image: null, skill: this.FitnessCalanaderSkills, description: 'An application that lets users input their food consumption and determines if you lost or gaines weight.'});
    this.projects.push({title: 'Snikie', image: null, skill: this.SnikieSkills, description: 'An application that lets students find a roomate to rent a property from a homeowner for college.'});
  }

}

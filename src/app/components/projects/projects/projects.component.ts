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
  public MiniGameSkills: string[] = ['Java'];
  public EbayAmazonSkills: string[] = ['Java'];
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
    this.projects.push({title: 'Mini-Game', image: "../../../../assets/images/Mini-Game.png", skill: this.MiniGameSkills, description: 'A 2-D Survival Game', link: "https://github.com/SheinH/Survival-Game"});
    this.projects.push({title: 'EbayAmazon', image: "../../../../assets/images/EbayAmazon.PNG", skill: this.EbayAmazonSkills, description: 'An eccomerce software that lets users buy, sell, and bid on items.', link: "https://github.com/andyyeung122/EbayAmazon"});
    this.projects.push({title: 'Fitness Calander', image: "../../../../assets/images/FitnessCalander.PNG",
    skill: this.FitnessCalanaderSkills, description: 'An application that lets users input their food consumption and determines if you lost or gaines weight.', link: "https://github.com/varunchennamadhava/FitnessCalander"});
    this.projects.push({title: 'Snikie', image: "../../../../assets/images/Snikie.PNG", skill: this.SnikieSkills, description: 'An application that lets students find a roomate to rent a property from a homeowner for college.', link: "https://github.com/snikie/Snikie"});
  }

}

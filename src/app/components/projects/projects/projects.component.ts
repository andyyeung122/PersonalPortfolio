import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToHome() {
    this.router.navigateByUrl('/home');
  }

  public goToResume() {
    this.router.navigateByUrl('/resume');
  }

}

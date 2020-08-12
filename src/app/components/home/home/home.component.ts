import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToHome() {
    this.router.navigateByUrl('/home');
  }

  public goToResume() {
    this.router.navigateByUrl('/resume');
  }

    public goToProjects() {
    this.router.navigateByUrl('/projects');
  }

}

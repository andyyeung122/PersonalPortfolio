import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfResume = "../../../../assets/pdf/AndyYeungResume.pdf";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToHome() {
    this.router.navigateByUrl('/home');
  }

}

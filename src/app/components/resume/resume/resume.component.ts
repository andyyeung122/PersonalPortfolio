import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfResume = "../../../../assets/pdf/AndyYeungResume.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}

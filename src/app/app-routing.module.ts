import { ResumeComponent } from './components/resume/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'projects', component: ProjectsComponent, },
  { path: 'resume', component: ResumeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { ResumeComponent } from './components/resume/resume/resume.component';
import { HomeComponent } from './components/home/home/home.component';
import { ContactDialogComponent } from './dialogs/contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ResumeComponent,
    HomeComponent,
    ContactDialogComponent
  ],
  entryComponents: [ContactDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PdfViewerModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  sendEmailForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ContactDialogComponent>) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  public buildForm() {
    this.sendEmailForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(2)])],
      company: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onSubmit() {

    this.dialogRef.close(this.sendEmailForm);
  }

}

import { Contact } from './models/contact';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './dialogs/contact-dialog/contact-dialog.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'personal-portfolio';
  public newContact: Contact = new Contact();

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void {

  }

  onContactMeClick() {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      panelClass: 'dialog-add',
      autoFocus: true,
      width: '700px',
    });

    const self = this;
    dialogRef.afterClosed().subscribe( res => {

      self.newContact.name = res.value.name;
      self.newContact.email = res.value.email;
      self.newContact.company = res.value.company;
      self.newContact.message = res.value.message;

    });
    // this.route.navigateByUrl('/newnotification');
  }
}

import { Component } from '@angular/core';
import { CommondetailsService } from '../commondetails.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = ''
  constructor(private cmd: CommondetailsService) {

    if (this.cmd.pagname) {
      this.title = 'Admin';
    }
    else {
      this.title = "User"
    }
  }

}

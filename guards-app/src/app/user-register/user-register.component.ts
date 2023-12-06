import { Component } from '@angular/core';
import { CommondetailsService } from '../commondetails.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  constructor(private cmd: CommondetailsService) { }
  datasav = false
  dataSave() {
    this.datasav = true
  }
}

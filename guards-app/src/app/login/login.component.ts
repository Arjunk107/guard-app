import { Component } from '@angular/core';
import { CommondetailsService } from '../commondetails.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private cmd: CommondetailsService, private router: Router) { }
  logindata = {
    username: '',
    password: ''
  }
  public hompage = ''
  logindet(nform: any, logdata: any) {
    console.log(logdata)
    if (logdata.username == 'admin') {
      this.hompage = 'home';
      this.router.navigate(['home'])
      this.cmd.adminPage(logdata.username)
      this.cmd.login();
    }
    else {
      this.hompage = 'home'
      this.cmd.login();

    }

  }
}

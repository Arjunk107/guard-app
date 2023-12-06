import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommondetailsService {

  constructor() { }
  pagname: boolean = false;
  adminPage(pagename: any) {
    if (pagename == 'admin') {
      return this.pagname = true
    }
    else {
      return false
    }
    console.log(pagename);
  }
  private isLoggedIn = false;
  private isSaved = false;
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  dataSaved() {
    return this.isSaved = true;
  }
}

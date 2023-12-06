import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommondetailsService } from './commondetails.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogincredentialsGuard implements CanActivate {

  constructor(private cmd: CommondetailsService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cmd.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
      alert("Unauthorised access");
      return false;
    }
  }

}

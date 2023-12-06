import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommondetailsService } from './commondetails.service';

@Injectable({
  providedIn: 'root'
})
export class HomecheckGuard implements CanActivateChild {
  constructor(private cmd: CommondetailsService) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cmd.pagname) {
      return true;
    }
    alert('Adminstrator Only');
    return false;
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CommondetailsService } from './commondetails.service';

@Injectable({
  providedIn: 'root'
})
export class DeactcheckGuard implements CanDeactivate<UserRegisterComponent> {
  constructor(private cmd: CommondetailsService) { }
  canDeactivate(
    component: UserRegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      return window.confirm("Do you want to Quit");
    }


  }

}

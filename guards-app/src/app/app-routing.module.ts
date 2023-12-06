import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LogincredentialsGuard } from './logincredentials.guard';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomecheckGuard } from './homecheck.guard';
import { UserRegisterComponent } from './user-register/user-register.component';
import { DeactcheckGuard } from './deactcheck.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent


  },
  {
    path: 'home',
    canActivate: [LogincredentialsGuard],
    component: HomeComponent,

  },
  {
    path: 'userhome',
    canActivateChild: [HomecheckGuard],
    children: [{
      path: 'user',
      component: UserHomeComponent
    },
    {
      path: 'admin',
      component: AdminhomeComponent
    }]
  }, {
    path: 'userregister',
    canDeactivate: [DeactcheckGuard],
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

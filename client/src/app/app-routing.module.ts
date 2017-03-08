import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { WelcomeComponent}       from "./welcome.component";

const appRoutes: Routes = [
  { path: '',           component: WelcomeComponent},
  // { path: 'users',      component: UsersComponent },
//{ path: '',           redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**',         component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}

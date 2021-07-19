import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [{
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },{
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },{
    path: '404', 
    component: ErrorPageComponent
  },{
    path: '**', 
    // component: ErrorPageComponent,
    redirectTo: '404'
  }
]


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot( routes )
    // CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
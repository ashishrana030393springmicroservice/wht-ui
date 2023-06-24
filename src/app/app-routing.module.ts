import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback/signin-redirect-callback.component';

const routes: Routes = [
  {
    path:'', loadChildren:()=> import('./index/index.module').then((m)=>m.IndexModule)
  },  
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
    pathMatch: 'full',
  },
  {
    path: 'signin-callback',
    component: SigninRedirectCallbackComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

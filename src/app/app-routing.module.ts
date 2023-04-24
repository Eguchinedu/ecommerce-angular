import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [{path: 'home', component: HomeComponent},
      {path:'', redirectTo:'home', pathMatch: 'full'},
      {path:'**', component: PageNotFoundComponent}];

@NgModule({
  imports: [SharedModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

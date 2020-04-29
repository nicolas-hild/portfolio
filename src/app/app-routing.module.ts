import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetDetailsComponent } from './projet-details/projet-details.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'projets/:id', component: ProjetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

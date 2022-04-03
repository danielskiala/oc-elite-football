import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { JoueursComponent } from './components/site/joueurs/joueurs.component';
import { ManagerComponent } from './components/site/manager/manager.component';
import { JoueurSingleComponent } from './components/site/joueur-single/joueur-single.component';
import { ActualitesComponent } from './components/site/actualites/actualites.component';
import { ActualiteSingleComponent } from './components/site/actualite-single/actualite-single.component';
import { MathsComponent } from './components/site/maths/maths.component';
import { PresidentComponent } from './components/site/president/president.component';

const routes: Routes = [
  {path:"", redirectTo:"site/home", pathMatch:"full"},
  {path:"site/home", component:HomeComponent},
  {path:"site/actualite", component:ActualitesComponent},
  {path:"site/joueurs", component:JoueursComponent},
  {path:"site/manager", component:ManagerComponent},
  {path:"site/joueur-single", component:JoueurSingleComponent},
  {path:"site/actualite-single", component:ActualiteSingleComponent},
  {path: "site/president", component:PresidentComponent},
  {path:"site/maths", component:MathsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

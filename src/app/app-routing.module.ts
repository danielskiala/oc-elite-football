import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { JoueursComponent } from './components/site/joueurs/joueurs.component';

const routes: Routes = [
  {path:"", redirectTo:"site/home", pathMatch:"full"},
  {path:"site/home", component:HomeComponent},
  {path:"site/joueurs", component:JoueursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

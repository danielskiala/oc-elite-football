import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/site/home/home.component';
import { NavComponent } from './components/site/nav/nav.component';
import { FooterComponent } from './components/site/footer/footer.component';
import { JoueursComponent } from './components/site/joueurs/joueurs.component';
import { ManagerComponent } from './components/site/manager/manager.component';
import { NavTeamsComponent } from './components/site/nav-teams/nav-teams.component';
import { ActualitesComponent } from './components/site/actualites/actualites.component';
import { JoueurSingleComponent } from './components/site/joueur-single/joueur-single.component';
import { ActualiteSingleComponent } from './components/site/actualite-single/actualite-single.component';
import { MathsComponent } from './components/site/maths/maths.component';
import { PresidentComponent } from './components/site/president/president.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    JoueursComponent,
    ManagerComponent,
    NavTeamsComponent,
    ActualitesComponent,
    JoueurSingleComponent,
    ActualiteSingleComponent,
    MathsComponent,
    PresidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

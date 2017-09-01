import { AboutMeComponent } from './about-me/about-me.component';
import { InitialNavComponent } from './initial-nav/initial-nav.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgsRevealModule } from 'ng-scrollreveal'; 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialNavComponent,
    AboutMeComponent,
    IntroductionComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgsRevealModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

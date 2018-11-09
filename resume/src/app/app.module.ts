import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ExperienceComponent,
        AchievementsComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

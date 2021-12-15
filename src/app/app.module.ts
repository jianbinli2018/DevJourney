import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './ui/header/header.component';

let primeNgModules: any[] = [
  SidebarModule,
  PanelModule,
  CardModule,
  ButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ContactComponent,
    GalleryComponent,
    GamesComponent,
    NavigationComponent,
    DashboardComponent,
    ProjectsComponent,
    BlogComponent,
    ProfileComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...primeNgModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

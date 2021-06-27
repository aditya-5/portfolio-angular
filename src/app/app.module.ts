import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import {RouterModule} from "@angular/router"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationDescComponent } from './education-desc/education-desc.component';

const appRoutes: Routes = [{path:'', redirectTo: '/home', pathMatch:'full'},
{path:'home', component:HomepageComponent},
{path:'education', component:EducationComponent},
{path:'contact', component:ContactComponent},
{path:'projects', component:ProjectsComponent}
                          ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
    EducationDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

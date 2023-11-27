import {RouterModule,Routes, provideRouter,RouterLink, RouterOutlet} from '@angular/router';
import { ApplicationConfig } from '@angular/core';
//import { Routes, provideRouter, RouterLink} from '@angular/router';
//import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { BigCardComponent } from './components/big-card/big-card.component';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const routes: Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"",
    component:BigCardComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  }
];
export class UsersRoutingModule { }
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

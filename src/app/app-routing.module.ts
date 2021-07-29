import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  {
    path: 'weather',
    component: HomeComponent,
    children: [
      {
        path: 'details', // child route path
        component: WeatherDetailsComponent, // child route component that the router renders
      }
    ]
  },
  { path: '', redirectTo: '/weather', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

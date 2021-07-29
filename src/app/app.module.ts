import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LocaltimeFromUnixPipe } from './pipes/localtime-from-unix.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherWidgetComponent,
    WeatherDetailsComponent,
    LocaltimeFromUnixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

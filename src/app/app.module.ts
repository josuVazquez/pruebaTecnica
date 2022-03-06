import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopWatchComponent } from './shared/components/stop-watch/stop-watch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { DigitalWatchComponent } from './shared/components/digital-watch/digital-watch.component'
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { StopWatchPageComponent } from './stop-watch-page/stop-watch-page.component';
import { TimeZonePageComponent } from './time-zone-page/time-zone-page.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    StopWatchComponent,
    DigitalWatchComponent,
    StopWatchPageComponent,
    TimeZonePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatOptionModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopWatchPageComponent } from './stop-watch-page/stop-watch-page.component';
import { TimeZonePageComponent } from './time-zone-page/time-zone-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/zone', pathMatch: 'full' },
  // { path: '**', redirectTo: '/zone', pathMatch: 'full' },
  { path: 'zone', component: TimeZonePageComponent },
  { path: 'stop-watch', component: StopWatchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

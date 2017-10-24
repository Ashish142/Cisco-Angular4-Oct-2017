import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/BugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/BugStats.component';

import { BugService } from './bugTracker/services/BugService';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }

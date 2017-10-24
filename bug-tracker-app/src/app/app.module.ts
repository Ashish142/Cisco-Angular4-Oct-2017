import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/BugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/BugStats.component';

import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [BugOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

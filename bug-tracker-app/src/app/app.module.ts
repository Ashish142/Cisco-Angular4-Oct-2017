import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/BugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/BugStats.component';

import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.Service';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    TrimTextPipe,
    SortPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [BugOperationsService, BugStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

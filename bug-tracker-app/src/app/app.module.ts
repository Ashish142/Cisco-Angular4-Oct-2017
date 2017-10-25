import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/BugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/BugStats.component';
import { BugEditComponent } from './bugTracker/bugEdit/BugEdit.component';

import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.Service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule, FormsModule, UtilsModule
  ],
  providers: [BugOperationsService, BugStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

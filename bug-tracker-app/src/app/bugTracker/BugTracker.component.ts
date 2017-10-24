import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'BugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	add(bugName : string){
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}
}
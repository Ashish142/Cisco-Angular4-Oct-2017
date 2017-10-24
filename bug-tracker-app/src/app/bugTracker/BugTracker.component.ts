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

	toggle(bug : Bug){
		bug.isClosed = !bug.isClosed;
	}

	removeClosed(){
		/*for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}*/
		/*this.bugs = this.bugs.filter(function(bug){
			return !bug.isClosed;
		});*/
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
		
	}
}
import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'BugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	

	constructor(private bugOperations : BugOperationsService){

	}


	add(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	toggle(bug : Bug){
		this.bugOperations.toggle(bug);
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
import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugService } from './services/BugService';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'BugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	

	constructor(private bugService : BugService){

	}


	add(bugName : string){
		let newBug : Bug = this.bugService.createNew(bugName);
		this.bugs.push(newBug);
	}

	toggle(bug : Bug){
		this.bugService.toggle(bug);
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
import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorageService } from './services/BugStorage.Service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'BugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	constructor(private bugStorage : BugStorageService){

	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	add(bugName : string){
		let newBug : Bug = this.bugStorage.addNew(bugName);
		this.bugs.push(newBug);
	}

	toggle(bug : Bug){
		this.bugStorage.toggle(bug);
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
import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorageService } from './services/BugStorage.Service';
import { Http } from '@angular/http';

import { BugServerService } from './services/BugServer.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'BugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	constructor(private bugServer : BugServerService, private bugStorage : BugStorageService, private http : Http){

	}

	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(data => this.bugs = data);
	}

	newBugAdded(bug : Bug){
		this.bugs = [...this.bugs, bug];
	}

	bugToggled(toggledBug : Bug) {
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}

	removeClosed(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
		}
		/*this.bugs = this.bugs.filter(function(bug){
			return !bug.isClosed;
		});*/
		//this.bugs = this.bugs.filter(bug => !bug.isClosed);

	}
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bug } from '../models/Bug';
import { BugOperationsService } from './BugOperations.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class BugServerService{
	constructor(private bugOperations : BugOperationsService, private http : Http){

	}
	getAll() : Observable<Bug[]>{
		return this.http
			.get('http://localhost:3000/bugs')
			.map(response => response.json());
	}
	addNew(bugName : string) : Observable<Bug>{
		let newBugData = this.bugOperations.createNew(0, bugName);
		return this.http
			.post('http://localhost:3000/bugs', newBugData)
			.map(response => response.json());	
	}
	toggle(bugToToggle : Bug) : Observable<Bug>{
		let toggledBugData = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put('http://localhost:3000/bugs/' + toggledBugData.id, toggledBugData)
			.map(response => response.json());		
	}
	remove(bug : Bug){
		return this.http
			.delete('http://localhost:3000/bugs/' + bug.id)
			.map(response => response.json());
	}
}


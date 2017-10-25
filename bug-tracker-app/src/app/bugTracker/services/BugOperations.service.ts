import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(id : number, bugName : string) : Bug{
		let newBug : Bug = {
			id : id,
			name : bugName,
			isClosed : false
		};
		return newBug;
	}

	toggle(bug : Bug) : void {
		bug.isClosed = !bug.isClosed;
	}
}
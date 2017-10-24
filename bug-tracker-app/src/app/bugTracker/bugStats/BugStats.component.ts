import { Component, Input } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{list.length}}</span>
		</section>
	`
})
export class BugStatsComponent{

	@Input()
	list : Bug[] = [];

	getClosedCount(){
		let closedCount : number = 0;
		for(let index=0, count = this.list.length; index < count; index++)
			if (this.list[index].isClosed)
				++closedCount;
		return closedCount;
	}
}
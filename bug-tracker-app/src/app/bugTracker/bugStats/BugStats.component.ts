import { Component, Input } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">1</span>
			<span> / </span>
			<span>{{list.length}}</span>
		</section>
	`
})
export class BugStatsComponent{

	@Input()
	list : Bug[] = [];
}
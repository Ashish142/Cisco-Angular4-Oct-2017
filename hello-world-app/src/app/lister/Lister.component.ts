import { Component } from '@angular/core';

@Component({
	selector : 'lister',
	template : `
		<input type="text" #tbox>
		<input type="button" value="Add" (click)="add(tbox.value)">
		<ol>
			<li *ngFor="let item of items">
				<span>{{item}}</span>
				<input type="button" value="Remove" (click)="remove(item)">
			</li>
		</ol>
	`
})
export class ListerComponent{
	items : string[] = [];

	add(item){
		this.items.push(item);
	}
	remove(item){
		let index = this.items.indexOf(item);
		if (index >= 0)
			this.items.splice(index, 1);
	}
}
import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector : 'math-result',
	templateUrl : 'mathResult.component.html',
	styleUrls : ['mathResult.component.css']
})
export class MathResultComponent implements OnChanges{

	@Input()
	data : number = 0;

	resultStyle = {};

	ngOnChanges() {
		this.resultStyle = {
			positive : this.data >= 0,
			negative : this.data < 0
		};
	}

}
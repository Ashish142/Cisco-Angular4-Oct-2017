import { Component } from '@angular/core';
import { MathCalculator } from './MathCalculator';


@Component({
	selector : 'math-calculator-2',
	templateUrl : 'MathCalculator2.component.html'
})
export class MathCalculator2Component{
	calculator : MathCalculator = new MathCalculator();

	
}
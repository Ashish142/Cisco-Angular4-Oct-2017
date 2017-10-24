import { Component } from '@angular/core';
import { MathCalculator } from './MathCalculator';


@Component({
	selector : 'math-calculator',
	templateUrl : 'MathCalculator.component.html'
})
export class MathCalculatorComponent{
	
	
	calculator : MathCalculator = new MathCalculator();

}
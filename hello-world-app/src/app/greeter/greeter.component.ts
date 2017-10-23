import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<h1>
    		Welcome to {{title}}!
		</h1>
		<label>App Name :</label>
		<input type="text"  [(ngModel)]="title">
		
		<p>In {{title}} lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat aspernatur, dolore commodi aut, iste minus sed autem necessitatibus molestias ratione culpa error tenetur esse rem ad, dolor quam voluptates quo.</p>
	`
})
export class GreeterComponent{
	title = 'My App';

  
}
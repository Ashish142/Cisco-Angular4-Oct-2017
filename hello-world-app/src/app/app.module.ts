import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { MathCalculatorComponent } from './mathCalculator/MathCalculator.component'
import { MathResultComponent } from './mathCalculator/mathResult/MathResult.component';
import { MathCalculator2Component } from './mathCalculator/MathCalculator2.component'
import { ListerComponent } from './lister/Lister.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    MathCalculatorComponent,
    MathCalculator2Component,
    MathResultComponent,
    ListerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

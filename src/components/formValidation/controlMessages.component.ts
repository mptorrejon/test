/*
	TODO
		template should always be present but only toggle error checking
		this will avoid pushing down other fields when error is fired
*/
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validationService.service';

@Component({
	selector: 'control-messages',
	template: '<div [hidden]="(errorMessage == null) ">{{errorMessage}}</div> '
})export class ControlMessages{

  	@Input() control: FormControl;
  	constructor( ) { }

  	get errorMessage() {

		for (let propertyName in this.control.errors) {
			
			if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
				
				return ValidationService.getValidatorsErrorMessage(propertyName, this.control.errors[propertyName]);
			}
		}
		return null;
	}
}

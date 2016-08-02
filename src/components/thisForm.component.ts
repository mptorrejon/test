import {Component} from '@angular/core';
// import { FormlyForm, FormlyConfig, FormlyMessages, FormlyProviders} from 'ng2-formly';
// import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'this-form',
	directives: [
		FormlyForm, 
		REACTIVE_FORM_DIRECTIVES
	],
	providers: [
		FormlyConfig, 
		FormlyMessages, 
		FormlyProviders
	],
	templateUrl: '../../assets/templates/body/form.template.html',
	styleUrls: ['../../assets/styles/css/form.css'],
	
})export class ThisForm{
	userForm: any;

	constructor(private formBuilder: FormBuilder){
		this.userForm = this.formBuilder.group({
			'firstname': ['', Validators.required],
			'lastname': ['', Validators.required /*, some callbal to a service to custom validator*/],
		});
	}
	saveUser(){
		console.log('saving user');
	}
}



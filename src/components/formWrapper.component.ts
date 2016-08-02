import {Component} from '@angular/core';
import {FormlyForm, FormlyConfig, FormlyMessages, FormlyProviders} from 'ng2-formly';
// import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
	selector: 'form-wrapper',
	templateUrl: '../../assets/templates/body/formWrapper.template.html', 
	directives: [FormlyForm/*, ROUTER_DIRECTIVES*/],
	providers: [FormlyConfig, FormlyMessages]
})export class FormWrapper{
	
	// constructor(fc:FormlyConfig){}
}
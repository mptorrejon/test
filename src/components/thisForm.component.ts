import {Component} from '@angular/core';
import { FormlyForm, FormlyConfig, FormlyMessages, FormlyProviders} from 'ng2-formly';
import {TemplateDirectives} from 'ng2-formly/templates';

@Component({
	selector: 'this-form',
	directives: [FormlyForm],
	providers: [FormlyConfig, FormlyMessages],
	templateUrl: '../../assets/templates/body/form.template.html',
	styleUrls: ['../../assets/styles/css/form.css'],
	
})export class ThisForm{
	user = {};
	userFields;
	options;
	/*
		initializes setup for formly-fields
		In html there should be a data binding key name 'userFields'
	*/
	constructor(fc: FormlyConfig){
			
		['input', 'checkbox','radio', 'select'].forEach((field) => {
			fc.setType({
				name: field,
				component: TemplateDirectives[field]
			});
		});
		this.options = {};
		//sets each field already initialized configuration settings
		this.userFields = [
			{
				className: "col-xs-4 ",
				key: 'Firstname',
				type: 'input',
				templateOptions: {
					label: 'First Name:'
				}
			},
			{
				className: "col-xs-4",
				key: 'Lastname',
				type: 'input',
				templateOptions: {
					label: "Lastname"
				}
			},
			{
				className: "col-xs-8",
				key: 'Title',
				type: 'input',
				templateOptions: {
					label: "Professional Experience"
				}
			},
			{
				className: "col-xs-8",
				key: "Location",
				type: "input",
				templateOptions: {
					label: "Location"
				}
			},
			{
				className: "col-xs-8",
				key: "Relocate",
				type: "checkbox",
				templateOptions: {
					label: "I am not willing to relocate"
				}
			},
			{
				className: "col-xs-4",
				key: "FldPractice",
				type: "select",
				templateOptions: {
					label: "Field of Practice",
					valueProp: "name",
					placeholder: "Select one",
					options: [
						{
							label: "Select One",
							name: "Default"
						},
						{
							label: "Option-A",
							name: "OptionA"
						},
						{
							label: "Option-B",
							name: "OptionB"
						},
						{
							label: "Option-C",
							name: "OptionC"
						}
					]
				}
			}
		]
	}	
}



import {Component} from '@angular/core';
import { FormlyForm, FormlyConfig, FormlyMessages, FormlyProviders} from 'ng2-formly';
import {TemplateDirectives} from 'ng2-formly/templates';

@Component({
	selector: 'this-form',
	directives: [FormlyForm],
	providers: [FormlyConfig, FormlyMessages, FormlyProviders],
	templateUrl: '../../assets/templates/body/form.template.html',
	styleUrls: ['../../assets/styles/css/form.css'],
	
})export class ThisForm{
	user = {};
	userFields;
	options;
	AddNewLanguage(){
		console.log("here");
	}
	/*
		initializes setup for formly-fields
		In html there should be a data binding key name 'userFields'
	*/
	constructor(fc: FormlyConfig, fm:FormlyMessages){
		
		['input', 'checkbox','radio', 'select'].forEach((field) => {
			// console.log(fc);
			fc.setType({
				name: field,
				component: TemplateDirectives[field]
			});
		});
		this.options = {};
		//sets each field already initialized configuration settings
		this.userFields = [
			//firstname
			{
				className: "col-xs-4 ",
				key: 'Firstname',
				type: 'input',
				templateOptions: {
					label: 'First Name:'
				}
			},
			//lastname
			{
				className: "col-xs-4",
				key: 'Lastname',
				type: 'input',
				templateOptions: {
					label: "Lastname"
				}
			},
			//Professional Title
			{
				className: "col-xs-8",
				key: 'Title',
				type: 'input',
				templateOptions: {
					label: "Professional Experience"
				}
			},
			//Location
			{
				className: "col-xs-8",
				key: "Location",
				type: "input",
				templateOptions: {
					label: "Location"
				}
			},
			// Checkbox Relocate
			{
				className: "col-xs-8",
				key: "Relocate",
				type: "checkbox",
				templateOptions: {
					label: "I am not willing to relocate"
				}
			},
			//Field of Practice
			{
				className: "col-xs-4 dropdown-label",
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
			},
			// Languages
			{
				className: "col-xs-8",
				template: "<p>Languages</p>"
			},
			{
				className: "row col-xs-8",
		        fieldGroup: [{
		          className: "col-xs-6",
		          type: "input",
		          key: "street",
		          templateOptions: {
		            placeholder: "Language"
		          }
		        }, {
		          className: "col-xs-3",
		          type: "select",
		          templateOptions: {
		          		options: [
		          			{
		          				label: "Select One",
		          				name: "default"
		          			},
		          			{
		          				label: "Spanish",
		          				name: "spanish"
		          			},
		          			{
		          				label: "Portuguese",
		          				name: "portuguese"
		          			}
		          		]
		          }
		        }]
			},
			{
				className: "col-xs-8",
				template: '<input (click)="callback()">Click me</p>',
				templateoptions: {
					callback: () => {
						console.log('a');
					}
				}
			}
		]
	}	
}



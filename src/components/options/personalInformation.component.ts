import { Component, EventEmitter, Output } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';
import { EraseContent } from '../eraseContent.component';

let wrapper = '../../assets/styles/css/content.css';
let form = "../../assets/styles/css/form.css";
let personalInformationTemplate = '../../assets/templates/body/options/personalInformation.template.html';

@Component({
	templateUrl: personalInformationTemplate,
	styleUrls: [ wrapper, form ],
	directives: [ REACTIVE_FORM_DIRECTIVES, EraseContent ]
})export class PersonalInformation{

	// @Output() firstname = new EventEmitter()
	userForm: any;

	constructor(private formBuilder: FormBuilder){
		this.userForm = this.formBuilder.group({
			'firstname': ['', Validators.required],
			'lastname': ['', Validators.required /*, some callback to a service to custom validator*/],
			'title': ['', Validators.required],
			'location': ['', Validators.required],
			'relocate': ['', Validators.required],
			'fldPractice':['', Validators.required],
			'language': ['', Validators.required],
			'phone': ['', Validators.required],
			'email': ['', Validators.required],
			'npi': ['', Validators.required],
			'stateLic': ['', Validators.required],
			'statement': ['', Validators.required]
		});
	}

	saveUser(){
		console.log('saving user');
	}
	//erased input content on click/tap
	eraseContent(id){
		this.userForm.controls[id].updateValue('');
	}
	toggle(value){
		// console.log(value.srcElement.value);
		if(value.srcElement.value=="on")
			value.srcElement.value = "off";
		else
			value.srcElement.value = "on";
		
		// console.log(value.srcElement.value);
	}
}

/*
	TODO
		+ separate toggle button into a different css file and component as well
		so it can be imported whenever needed.
		+ 
*/

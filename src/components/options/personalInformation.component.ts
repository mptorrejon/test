import { Component, EventEmitter, Output, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';
import { EraseContent } from '../eraseContent.component';
import { ShowDivs } from '../../services/showDivs.service';
import { AddAnother } from '../addAnother.component';
import {Language} from  '../language.component';

let wrapper = '../../assets/styles/css/content.css';
let form = "../../assets/styles/css/form.css";
let personalInformationTemplate = '../../assets/templates/body/options/personalInformation.template.html';

@Component({
	templateUrl: personalInformationTemplate,
	styleUrls: [ wrapper, form ],
	directives: [REACTIVE_FORM_DIRECTIVES, EraseContent, AddAnother, Language]
})export class PersonalInformation{
	// repeat:Array<number>= [1];
	// @Input() r ;
	userForm: any;

	constructor(private formBuilder: FormBuilder, private show:ShowDivs/*, private l:Language*/){
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
		// console.log("===========");
		// console.log( l.getItirator() );
		// console.log(this.r);
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
	/*
		Add any logic for when component is mounted
	*/
	ngOnInit(){
		// console.log('component mounted!!!');
		this.show.updateView(true);
	}
	/*
		+ unsubscribe from ShowDivs Observable
	*/
	ngOnDestroy(){
		// console.log('component unmounted!!!');
		this.show.updateView(false);

	}
}

/*
	TODO - MAKE ITS OWN LIBRARY
		+ separate toggle button into a different css file and component as well
		so it can be imported whenever needed.
*/

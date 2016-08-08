import { Component, EventEmitter, Output, Input, ContentChildren,ViewChild, ViewContainerRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';
import { EraseContent } from '../eraseContent.component';
import { ShowDivs } from '../../services/showDivs.service';
import { AddAnother } from '../addAnother.component';
import { Language } from  '../container.component';
import { Help } from '../help.component';
import {WordCount} from '../wordCount.component';

let wrapper = '../../assets/styles/css/content.css';
let form = "../../assets/styles/css/form.css";
let switchToggle = "../assets/styles/css/switch.css";
let personalInformationTemplate = '../../assets/templates/body/options/personalInformation.template.html';

@Component({
	templateUrl: personalInformationTemplate,
	styleUrls: [ wrapper, form, switchToggle ],
	directives: [
		REACTIVE_FORM_DIRECTIVES, 
		EraseContent, 
		AddAnother, 
		Language, 
		Help,
		WordCount
	]
})export class PersonalInformation{
	userForm: any;
	
	counter:number;
	constructor(private formBuilder: FormBuilder, private show:ShowDivs, private view:ViewContainerRef){
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
	//erased input content on click/tap
	eraseContent(id){
		this.userForm.controls[id].updateValue('');
	}
	toggle(value){
		if(value.srcElement.value=="on")	value.srcElement.value = "off";
		else 								value.srcElement.value = "on";
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

	UpdateCounter($event){
		($event.keyCode==8)?this.counter -= 1:this.counter = $event.srcElement.textLength+1;
	}
}
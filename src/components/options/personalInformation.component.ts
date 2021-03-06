import { Component, EventEmitter, Output, Input, ContentChildren,ViewChild, ViewContainerRef } from '@angular/core';
// import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/forms';

import { EraseContent } from '../body/eraseContent.component';
import { ShowDivs } from '../../services/showDivs.service';
import { AddAnother } from '../body/addAnother.component';
import { Language } from  '../body/container.component';
import { Help } from '../body/help.component';
import { WordCount } from '../body/wordCount.component';
import { TitleService } from  '../../services/thisTitle.service';
import { ValidationService } from '../../services/validationService.service';
import {ControlMessages} from '../formValidation/controlMessages.component';
import { AddRemoveClass } from '../../services/addRemoveClass.service';

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
		WordCount,
		ControlMessages
	]
})export class PersonalInformation{
	userForm: any;
	thisTitle:string="Default";
	counter:number;

	constructor(
		private formBuilder: FormBuilder, 
		private show:ShowDivs, 
		private view:ViewContainerRef,
		private title: TitleService,
		private ARC:AddRemoveClass
	){
		this.userForm = this.formBuilder.group({
			'firstname': [ '', ValidationService.Firstname ],
			'lastname': [ '', ValidationService.Lastname ],
			'title': [ '', ValidationService.Title ],
			'location': [ '', ValidationService.Location ],
			// 'relocate': [ '', Validators.required ],
			'bhwProgram': [''],
			'fldPractice':[ '', Validators.required ],
			'language': [ '', Validators.required ],
			'phone': [ '', Validators.required ],
			'email': [ '', ValidationService.emailValidator ],
			'npi': [ '', Validators.required ],
			'stateLic': [ '', Validators.required ],
			'statement': [ '', Validators.required ]
		});
		// console.log(this.userForm);
		
		title.thisTitle.subscribe(val=>{
			this.thisTitle = val;
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
	/* Add any logic for when component is mounted */
	ngOnInit(){
		this.show.updateView(true);
	}
	/* unsubscribe from ShowDivs Observable */
	ngOnDestroy(){
		this.show.updateView(false);
	}
	//updates textarea counter for max characters
	UpdateCounter($event){
		($event.keyCode==8)?this.counter -= 1:this.counter = $event.srcElement.textLength+1;
	}
	//toggles class of 'erase-cmp' to show/hide respectively
	showEraseComp(event){
		this.ARC.RemoveClass(event.srcElement.nextElementSibling.firstChild, "hide-erase-comp");
		this.ARC.AddClass(event.srcElement.nextElementSibling.firstChild, "show-erase-comp");
	}
	focusOut(event){
		let that = this;
		// wait 1 ms so event does not disappear
		setTimeout(function(){
			that.ARC.RemoveClass(event.srcElement.nextElementSibling.firstChild, "show-erase-comp");
			that.ARC.AddClass(event.srcElement.nextElementSibling.firstChild, "hide-erase-comp");	
		}, 100);	
	}

	saveAndContinue(){
		console.log( this.userForm );
	}
}
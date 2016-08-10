import { Component, EventEmitter, Output, Input, ContentChildren,ViewChild, ViewContainerRef } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Validators, Control} from '@angular/common';

import { EraseContent } from '../body/eraseContent.component';
import { ShowDivs } from '../../services/showDivs.service';
import { AddAnother } from '../body/addAnother.component';
import { Language } from  '../body/container.component';
import { Help } from '../body/help.component';
import { WordCount } from '../body/wordCount.component';
import { TitleService } from  '../../services/thisTitle.service';
import { ValitionService } from '../../services/validationService.service';

let wrapper = '../../assets/styles/css/content.css';
let form = "../../assets/styles/css/form.css";
let switchToggle = "../assets/styles/css/switch.css";
let personalInformationTemplate = '../../assets/templates/body/options/personalInformation.template.html';

@Component({
	templateUrl: personalInformationTemplate,
	styleUrls: [ wrapper, form, switchToggle ],
	directives: [
		FORM_DIRECTIVES, 
		EraseContent, 
		AddAnother, 
		Language, 
		Help,
		WordCount
	]
})export class PersonalInformation{
	userForm: any;
	thisTitle:string="Default";
	counter:number;
	firstname:Control;

	constructor( 
		private formBuilder: FormBuilder, 
		private show:ShowDivs, 
		private view:ViewContainerRef,
		private title: TitleService
	){
		this.firstname = new Control('', Validators.required);

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
}
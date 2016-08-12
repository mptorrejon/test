import { Component,ViewChild, Input, Output, DynamicComponentLoader,ViewContainerRef } from '@angular/core';
import { Language } from './container.component';
import { SetTemplate } from  '../../services/setTemplate.service';

@Component({
	selector: 'add-another',
	template: `
				<container type="{{type}}" #container ></container>
				<button (click)="addAnother(type)" >
					+ Add Another {{typeText}}
				<button>
			`,
	directives: [Language/*, StateLic*/],
	/*
	SetTemplate needs to be initialized each time the button is used, so that 
	fields and component loading does not trigger the same result in both views(Another Language and Another State)
	*/
	providers: [SetTemplate]
})export class AddAnother{
	/*	THINK ABOUT USING OBJECTS INSTEAD OF BUNCH OF VARIABLES	*/
	@ViewChild('container', {read: ViewContainerRef}) container:ViewContainerRef;
	@Input() type;
	@Output() typeText:string="Default";

	constructor(
		private view:ViewContainerRef,
		private loader:DynamicComponentLoader,
		private setTemplate:SetTemplate
	){}

	ngOnInit(){
		// console.log( this.type );
		if(this.type == "language")			this.typeText = "Language";
		else if(this.type == "stateLic")	this.typeText = "State"
	}

	addAnother(which){
		if(which=="language"){
			//updates service to display the correct component
			this.setTemplate.updateType("language");
			//do I need this?????
			this.type = "language";
			//loads template component with the right variables already set by service
			this.loader.loadNextToLocation(Language, this.container );
		}else{
			this.setTemplate.updateType("state");
			this.type = "state";
			this.loader.loadNextToLocation(Language, this.container );
		}
		// // remove list and id attribute so each input and list are uni
		// document.getElementsByClassName('languages')[0].setAttribute('list', '');
		// document.getElementsByClassName('languages')[0].className = "";
		// document.getElementsByClassName('list')[0].setAttribute('id', '');
		// document.getElementsByClassName('list')[0].className = "";
	}
}
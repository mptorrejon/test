import { Component, Input, Output, ElementRef, ViewChild,EventEmitter } from '@angular/core';
import { TOOLTIPCONTENT } from '../constants/tooltipContent.constant';
import {AddRemoveClass} from '../services/AddRemoveClass.service';

@Component({
	host: {
		'(document:click)': 'onclick($event)'
	// 	// '(document:mousedown)': 'handleEvent($event)'
	},
	selector: 'help',
	templateUrl: '../../assets/templates/body/help.template.html',
	styleUrls:['../../assets/styles/css/help.css'],
	providers: [ AddRemoveClass ]

})export class Help{
	@Output() content:string = "";
	@Input() type:string = "";
	// @ViewChild('parentHelp', {read: ViewContainerRef}) help:ViewContainerRef;
	el;
	// current;
	// public eleRef;
	
	constructor( private ARC:AddRemoveClass, private eref:ElementRef ){
		// this.eleRef = eref;
	}
	
	displayContent(){
		/*
			If there is a better way to do this, please contribute
		*/
		switch(this.type){
			case 'title':
				this.content = TOOLTIPCONTENT.title;
			break;
			case 'fldPractice':
				this.content = TOOLTIPCONTENT.fldPractice;
			break;
			case 'default':
				this.content = TOOLTIPCONTENT.default;
		}
		this.el = document.getElementsByClassName('help-tooltip')[0];
		this.ARC.RemoveClass(this.el, 'tooltip-hide');
		this.ARC.AddClass(this.el, "tooltip-show");
		
	}
	onclick(){
		console.log('a');
	}
}
import { Component, Input, Output, ElementRef, ViewChild,EventEmitter } from '@angular/core';
import { TOOLTIPCONTENT } from '../constants/tooltipContent.constant';
import { AddRemoveClass } from '../services/AddRemoveClass.service';

@Component({
	host: {

		'(document:click)': 'onclick($event)'
	},
	selector: 'help',
	templateUrl: '../../assets/templates/body/help.template.html',
	styleUrls:['../../assets/styles/css/help.css'],
	providers: [ AddRemoveClass ]

})export class Help{
	@Output() content:string = "";
	@Input() type;
	el:string = "";
	elem;

	constructor( private ARC:AddRemoveClass, private eref:ElementRef ){
		this.elem = eref;
	}

	displayContent(event){
		/*If there is a better way to do this, please contribute*/

		switch(this.type){
			case 'title':		this.content = TOOLTIPCONTENT.title;		break;
			case 'fldPractice':	this.content = TOOLTIPCONTENT.fldPractice;	break;
			case 'npi':			this.content = TOOLTIPCONTENT.npi;	break;
			case 'statement':	this.content = TOOLTIPCONTENT.statement;	break;
			case 'default':		this.content = TOOLTIPCONTENT.default;		break;
		}
		this.el = event.target.nextElementSibling;
		this.ARC.RemoveClass( this.el, 'tooltip-hide' );
		this.ARC.AddClass( this.el, "tooltip-show" );
	}

	onclick(event){
		// console.log(this.type);
       	var clickedComponent = event.target;
       	var inside = false;
       	// only fire element with a content, others are empty and do not need to picked up
       	if(this.content!=""){
	       	do {
				if (clickedComponent === this.elem.nativeElement) {
					inside = true;
				}
				/*walk up the DOM tree*/
				clickedComponent = clickedComponent.parentNode;
			} while (clickedComponent);

			if(inside){
				console.log('inside');
			}else{
				console.log('outside');

				/*
					have some for of check that only fires when a tooltip is displayed; 
					otherwise, event is gonna hire for every other click
				*/
				this.ARC.RemoveClass(this.el, "tooltip-show");
				this.ARC.AddClass(this.el, "tooltip-hide");
			}
		}

	}
}
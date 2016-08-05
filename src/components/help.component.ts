import { Component, Input, Output, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TOOLTIPCONTENT } from '../constants/tooltipContent.constant';
import {AddRemoveClass} from '../services/AddRemoveClass.service';

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
	@ViewChild('parentHelp', {read: ViewContainerRef}) help:ViewContainerRef;

	constructor( private ARC:AddRemoveClass, private eref:ElementRef ){}
	ngOnInit(){
		// console.log()
		// console.log( this.type );
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

		let el = document.getElementsByClassName('help-tooltip')[0];
		console.log(el);

		this.ARC.RemoveClass(el, 'tooltip-hide');
		this.ARC.AddClass(el, "tooltip-show");
	}

	onclick(e){
		console.log("---");
		console.log( this.help );
		// if ( !this.eref.nativeElement.contains(e.target) ){
		//      this.hideCmp();
		// }else{
		// 	console.log('element');
		// }
	}
	hideCmp(){
		console.log('hide!!!!');
	}
}
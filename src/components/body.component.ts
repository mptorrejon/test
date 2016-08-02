import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AddRemoveClass } from '../services/addRemoveClass.service';
import { HOME_OPTIONS } from '../constants/homeOptions.constant';
import { TitleService } from '../services/thisTitle.service';

@Component({
	selector: 'my-body',
	templateUrl: '../../assets/templates/body/body.template.html',
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ AddRemoveClass ]
})export class Body{
	home_options : Array<string>;
	ARC;
	
	constructor( ARC:AddRemoveClass, private title:TitleService) {
		this.home_options = HOME_OPTIONS;
		this.ARC = ARC;
		// this.t = T;
	}

	showRouterOutlet(e){
		let el = document.getElementsByClassName('home-wrapper-main')[0];
		this.ARC.AddClass(el, 'home-wrapper-submenu');

		el = document.getElementsByClassName('sessionCtrl')[0];
		
		this.ARC.AddClass(el, 'show-ctrls');
		this.ARC.RemoveClass(el, 'hide-ctrls');
		
		//toggles option element when user clicks on different options
		this.toggleActive(document.querySelectorAll('.options'), e);
		//fires event to place correct title
		this.title.changeValue( e.target.innerText.trim()  );

		el = document.getElementsByClassName('addPicture-wrapper')[0];
		this.ARC.RemoveClass(el, 'show');
		this.ARC.AddClass(el, 'hide');
	}

	toggleActive(options, e){
		//sets all elements to disable class
		for(let i=0; i<options.length; i++)	{
			this.ARC.RemoveClass(options[i], "active");
			this.ARC.AddClass(options[i], 'disable');
		}
		//sets element with proper class 'active'
		this.ARC.RemoveClass(e.target, 'disable');
		this.ARC.AddClass(e.target, 'active');
	}
}
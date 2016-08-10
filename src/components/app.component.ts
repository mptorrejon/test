import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AddRemoveClass } from '../services/addRemoveClass.service';
import { Body } from './body.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { SessionCtrls } from './sessionCtrls.component';
import { TitleService } from '../services/thisTitle.service';
import { AddPicture } from './AddPicture.component';
import { Subscription } from 'rxjs/Subscription';
import { ShowDivs }from '../services/showDivs.service';
import { ProgressGraph } from './progressGraph.component';

import { PersonalInformation } from './options/personalInformation.component';
// import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'landing-site',
	templateUrl: '../../assets/templates/body/app.template.html',
	directives: [ 
		ROUTER_DIRECTIVES,
		Header, 
		Footer, 
		SessionCtrls, 
		Body,
		AddPicture,
		ProgressGraph
	],
	providers: [ AddRemoveClass, TitleService ],
	styleUrls: ['../../assets/styles/css/home-page.css'],
	precompile: [PersonalInformation]
})
export class AppComponent {
	isHome:boolean;
	subscription: Subscription;
	t:string;

	constructor(
		private show:ShowDivs, 
		private location:Location, 
		private title:TitleService
	){}

	ngOnInit(){
		//sets correct ishome value for divs to hide/show correctly
		this.subscription = this.show.isShow.subscribe(val=>{
			this.isHome = val;
			// console.log(this.isHome);
		});
		
		// sets correct title, based on the route Ex, localhots:3003/Persona_Information would be set to
		// Personal Information
		this.t = this.title.changeValue( this.location.path().replace(/[/_]/g, ' ').trim() );

		//if view is home, then we update our view to show/hide divs correctly
		if(this.location.path() == "")	this.show.updateView(false);
		else							this.show.updateView(true);
		
		//TODO need to set toggleActive into a service, so it can be injected
		// this.toggleActive(document.querySelectorAll('.options'), e);
	}
	//HAVE THIS INTO AN INJECTABLE==========================================
	// toggleActive(options, e){
	// 	//sets all elements to disable class
	// 	for(let i=0; i<options.length; i++)	{
	// 		this.ARC.RemoveClass(options[i], "active");
	// 		this.ARC.AddClass(options[i], 'disable');
	// 	}
	// 	//sets element with proper class 'active'
	// 	this.ARC.RemoveClass(e.target, 'disable');
	// 	this.ARC.AddClass(e.target, 'active');
	// }
	//=====================================================================
}
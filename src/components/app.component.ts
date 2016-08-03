import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location  } from '@angular/common';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AddRemoveClass } from '../services/addRemoveClass.service';
import { Body } from './body.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { SessionCtrls } from './sessionCtrls.component';
import { TitleService } from '../services/thisTitle.service';
import { AddPicture } from './AddPicture.component';
import { Subscription } from 'rxjs/Subscription';
import { ShowDivs }from '../services/showDivs.service';
import {PersonalInformation} from './options/personalInformation.component';
// import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'landing-site',
	templateUrl: '../../assets/templates/body/app.template.html',
	directives: [ 
		ROUTER_DIRECTIVES,
		// REACTIVE_FORM_DIRECTIVES,
		Header, 
		Footer, 
		SessionCtrls, 
		Body,
		AddPicture
	],
	providers: [ AddRemoveClass, TitleService ],
	styleUrls: ['../../assets/styles/css/home-page.css'],
	precompile: [PersonalInformation]
})
export class AppComponent {
	// path;
	isHome:boolean;
	subscription: Subscription;

	constructor(private show:ShowDivs, private location:Location){}

	ngOnInit(){
		this.subscription = this.show.isShow.subscribe(val=>{
			this.isHome = val;
		});

		if(this.location.path() == ""){
			// console.log("home");
			this.show.updateView(false);
		}else{
			// console.log(" not home");
			this.show.updateView(true);
		}
	}
}
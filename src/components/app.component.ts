import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Location} from '@angular/common';
import { AddRemoveClass } from '../services/addRemoveClass.service';
import { Body } from './body.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { SessionCtrls } from './sessionCtrls.component';
import { TitleService } from '../services/thisTitle.service';
import { AddPicture } from './AddPicture.component';
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
	styleUrls: ['../../assets/styles/css/home-page.css']
})
export class AppComponent {
	
	constructor(private router:Router, private location:Location){
	}

}
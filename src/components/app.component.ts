import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AddRemoveClass} from '../services/addRemoveClass.service';
// import {Home} from './home.component';
import { HOME_OPTIONS } from '../constants/homeOptions.constant';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { SessionCtrls } from './sessionCtrls.component';
import { TitleService} from '../services/thisTitle.service';

@Component({
  selector: 'landing-site',
  templateUrl: '../../assets/templates/body/app.template.html',
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES, Header, Footer, SessionCtrls],
  providers: [AddRemoveClass, TitleService],
  styleUrls: ['../../assets/styles/css/home-page.css']
})
export class AppComponent {
	home_options : Array<string>;
	ARC;
	constructor(ARC:AddRemoveClass, t:TitleService){
		this.home_options = HOME_OPTIONS;
		this.ARC = ARC;
	}
	showRouterOutlet(e){
		let el = document.getElementsByClassName('home-wrapper-main')[0];
		this.ARC.AddClass(el, 'home-wrapper-submenu');

		el = document.getElementsByClassName('sessionCtrl')[0];
		
		this.ARC.AddClass(el, 'show-ctrls');
		this.ARC.RemoveClass(el, 'hide-ctrls');
		
		//toggles option element when user clicks on different options
		this.toggleActive(document.querySelectorAll('.options'), e);

		console.log(e);
	}
	/*
		Use this for testing, until routing refresh is figured out.
		USE this when styling main menu, UNTIL routing refresh is fixed
	*/
	ngOnInit(){
		// let el = document.getElementsByClassName('home-wrapper-main')[0];
		// this.ARC.AddClass(el, 'home-wrapper-submenu');	
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
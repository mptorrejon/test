import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AddRemoveClass} from '../services/addRemoveClass.service';
// import {Home} from './home.component';
import {HOME_OPTIONS} from '../constants/homeOptions.constant';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import {SessionCtrls} from './sessionCtrls.component';

@Component({
  selector: 'landing-site',
  templateUrl: '../../assets/templates/body/app.template.html',
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES, Header, Footer, SessionCtrls],
  providers: [AddRemoveClass],
  styleUrls: ['../../assets/styles/css/home-page.css']
})
export class AppComponent {
	home_options : Array<string>;
	ARC;
	constructor(ARC:AddRemoveClass){
		this.home_options = HOME_OPTIONS;
		this.ARC = ARC;
	}
	showRouterOutlet(e){
		let el = document.getElementsByClassName('home-wrapper-main')[0];
		this.ARC.AddClass(el, 'home-wrapper-submenu');
	}
	/*
		Use this for testing, until routing refresh is figured out.
	*/
	ngOnInit(){
		let el = document.getElementsByClassName('home-wrapper-main')[0];
		this.ARC.AddClass(el, 'home-wrapper-submenu');	
	}
}

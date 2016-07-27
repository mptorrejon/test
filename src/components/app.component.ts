import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import {Home} from './home.component';
import {HOME_OPTIONS} from '../constants/homeOptions.constant';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';

@Component({
  selector: 'landing-site',
  templateUrl: '../../assets/templates/body/app.template.html',
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES, Header, Footer],
  styleUrls: ['../../assets/styles/css/home-page.css']
})
export class AppComponent {
	home_options : Array<string>;
	constructor(){
		this.home_options = HOME_OPTIONS;
	}

	showRouterOutlet(e){
		console.log(e);
		console.log(this);
		// console.log( document.getElementsByClassName() )
	}
}
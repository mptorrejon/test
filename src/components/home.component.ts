import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {HOME_OPTIONS} from '../constants/homeOptions.constant';

@Component({
	templateUrl: '../../assets/templates/body/home.template.html',
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ['../../assets/styles/css/home-page.css']
}) export class Home{

	home_options : Array<string>;
	constructor(){
		this.home_options = HOME_OPTIONS;
	}
}
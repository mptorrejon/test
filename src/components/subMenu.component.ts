import {Component} from '@angular/core';
import {HOME_OPTIONS} from '../constants/homeOptions.constant';

@Component({
	selector: 'sub-menu',
	templateUrl: '../../assets/templates/body/subMenu.template.html',
	styleUrls: ['../../assets/styles/css/submenu.css']
})export class SubMenu{
	options: Array<string>;
	constructor(){
		this.options = HOME_OPTIONS;
	}
}
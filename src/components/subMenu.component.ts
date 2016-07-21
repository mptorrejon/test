import {Component} from '@angular/core';
import {HOME_OPTIONS} from '../constants/homeOptions.constant';

@Component({
	selector: 'sub-menu',
	templateUrl: '../../assets/templates/body/subMenu.template.html'
})export class SubMenu{
	option: Array<string>;
	constructor(){
		this.option = HOME_OPTIONS;
	}
}